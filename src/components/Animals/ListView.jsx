import React from 'react';
import styled from 'styled-components';
import { Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import dayjs from 'dayjs';
import Slide from '@material-ui/core/Slide';

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
      {result &&
        result.map((animal, i) => (
          <Slide direction="up" in mountOnEnter unmountOnExit>
            <Card
              variant="outlined"
              className={`${classes.root} card`}
              key={i}
            >
              <ImgWrapper
                src={`${animal.image}?random=${Math.random()}`}
                width="5%"
              />

              <DetailsWrapper>
                <Typography>
                  <RowField>
                    Name: <span>{animal.name}</span>
                  </RowField>
                  <RowField>Gender: {animal.gender}</RowField>
                  <RowField>Species: {animal.species}</RowField>
                  <RowField>Breed: {animal.breed}</RowField>
                  {/* <RowField>Date added: {animal.createdAt}</RowField> */}
                  <RowField>
                    Date added:{' '}
                    {dayjs(animal.createdAt).format('DD-MM-YYYY')}
                  </RowField>
                  <RowField>
                    Time added:{' '}
                    {dayjs(animal.createdAt).format('HH:mm:ssZ[Z]')}
                  </RowField>
                </Typography>
              </DetailsWrapper>
            </Card>
          </Slide>
        ))}
    </FlexWrapper>
  );
};

export default BlockView;
