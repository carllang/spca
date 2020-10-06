import React from 'react';
import styled from 'styled-components';
import { Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import dayjs from 'dayjs';

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .card {
    display: flex;
    justify-content: space-between;
    margin: 0 0 20px;
    width: 100%;
  }
`;

const ImgWrapper = styled.img`
  display: block;
`;

const DetailsWrapper = styled.span`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const RowField = styled.span`
  margin-right: 20px;
`;

const useStyles = makeStyles({
  root: {
    overflow: 'visible',
    padding: '5px',
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
            <ImgWrapper
              src={`${person.image}?random=${Math.random()}`}
              width="5%"
            />

            <DetailsWrapper>
              <Typography>
                <RowField>
                  Name:
                  {' '}
                  <span>{`${person.firstName} ${person.lastName}`}</span>
                </RowField>
                <RowField>
                  Tel:
                  {' '}
                  {person.tel}
                </RowField>
                <RowField>
                  Description:
                  {' '}
                  {person.description}
                </RowField>
                <RowField>
                  Date added:
                  {' '}
                  {dayjs(person.createdAt).format('DD-MM-YYYY')}
                </RowField>
                <RowField>
                  Time added:
                  {' '}
                  {dayjs(person.createdAt).format('HH:mm:ssZ[Z]')}
                </RowField>
              </Typography>
            </DetailsWrapper>
          </Card>
        ))}
    </FlexWrapper>
  );
};

export default BlockView;
