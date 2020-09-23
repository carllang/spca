/* eslint-disable react/prefer-stateless-function */

/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Animals from '../../components/Animals/Animals';
import Pending from '../../components/Pending/Pending';
import useFetchAnimalsData from '../../hooks/fetchAnimalsData';

const Container = styled.div`
  width: 100%;

`;

const AnimalsContainer = () => {
  const { animals, pending } = useFetchAnimalsData();

  return (
    pending ? <Pending />
      : (
        <Container>
          <Animals animals={animals} />
        </Container>
      )
  );
};

export default AnimalsContainer;
