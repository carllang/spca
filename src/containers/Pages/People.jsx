import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../components/Layout/MainLayout';
import KennelsContainer from '../Kennels/KennelsContainer';

const Container = styled.div`
  padding: 20px;
`;

const PeoplePage = () => (
  <MainLayout>
    <h1>People</h1>
    <Container>
      <KennelsContainer />
    </Container>
  </MainLayout>
);

export default PeoplePage;
