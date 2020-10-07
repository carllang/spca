import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../components/Layout/MainLayout';
import Animals from '../../components/Animals/Animals';
import useFetchAnimalsData from '../../hooks/useFetchAnimalsData';

const Container = styled.div`
  padding: 20px;
  width: 100%;
`;

const AnimalsPage = () => {
  const { animals, pending } = useFetchAnimalsData();
  return (
    <MainLayout>
      <h2>Animals</h2>
      <Container>
        <Animals animals={animals} pending={pending} />
      </Container>
    </MainLayout>
  );
};

export default AnimalsPage;
