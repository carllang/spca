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

const Animals = ({ animals }) => {
  const classes = useStyles();
  const [result, setResult] = useState(animals);

  const handleFilterInput = (e) => {
    const animalsFiltered = animals.filter((animal) =>
      animal.name.toLowerCase().includes(e.target.value),
    );
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
        {result &&
          result.map((animal, i) => (
            <Card
              variant="outlined"
              className={`${classes.root} card`}
              key={i}
            >
              <ul>
                <li>
                  <ImgWrapper
                    src={`${animal.image}?random=${Math.random()}`}
                    width="150"
                    height="90"
                  />
                  Name: <span>{animal.name}</span>
                </li>
                <li>
                  Species: <span>{animal.species}</span>
                </li>

                {/* <li>{animal.description}</li> */}
              </ul>
            </Card>
          ))}
      </FlexWrapper>
    </div>
  );
};

export default Animals;
