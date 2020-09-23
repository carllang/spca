import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../components/Layout/MainLayout';
import AnimalsContainer from '../Animals/AnimalsContainer';

const Container = styled.div`
  padding: 20px;
`;

const AnimalsPage = () => (
  <MainLayout>
    <h2>Animals</h2>
    <Container>
      <AnimalsContainer />
    </Container>
  </MainLayout>
);

export default AnimalsPage;
