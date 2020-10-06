import React from 'react';
import styled from 'styled-components';
import { Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const FlexWrapper = styled.div`
  display: flex;
  justifycontent: space-between;
  flex-wrap: wrap;
  .card {
    margin: 0 20px 20px 0;
    width: 23%;
  }
`;

const ImgWrapper = styled.img`
  display: block;
  margin-bottom: 20px;
`;

const useStyles = makeStyles({
  root: {
    overflow: 'visible',
    padding: '20px',
  },
});

const BlockView = ({ result }) => {
  const classes = useStyles();
  return (
    <FlexWrapper>
      {result
      && result.map((person, i) => (
        <Card
          variant="outlined"
          className={`${classes.root} card`}
          key={i}
        >
          <ul>
            <li>
              <ImgWrapper
                src={`${person.image}?random=${Math.random()}`}
                width="100%"

              />
              Name:
              {' '}
              <span>{person.firstName}</span>
            </li>
            <li>
              Tel:
              {' '}
              <span>{person.tel}</span>
            </li>

            <li>{person.description}</li>
          </ul>
        </Card>
      ))}
    </FlexWrapper>
  );
};

export default BlockView;
