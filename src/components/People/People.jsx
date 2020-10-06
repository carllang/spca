import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const ImgWrapper = styled.img`
  display: block;
  margin-bottom: 20px;
`;

const FlexWrapper = styled.div`
  display: flex;
  justifycontent: space-between;
  flex-wrap: wrap;
  .card {
    margin: 0 20px 20px 0;
    width: 23%;
  }
`;

const FIlterWrapper = styled.div`
  margin-bottom: 40px;
`;

const useStyles = makeStyles({
  root: {
    overflow: 'visible',
    padding: '20px',
  },
});

const People = ({ people }) => {
  const classes = useStyles();
  const [result, setResult] = useState(people);

  const handleFilterInput = (e) => {
    const animalsFiltered = people ? people.filter((person) => person.firstName.toLowerCase().includes(e.target.value)) : [];
    setResult(animalsFiltered);
  };

  return (
    <div>
      <FIlterWrapper>
        <TextField
          onChange={handleFilterInput}
          label="Filter results"
          variant="outlined"
        />
      </FIlterWrapper>

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
    </div>
  );
};

export default People;
