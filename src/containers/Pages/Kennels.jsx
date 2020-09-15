import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../components/Layout/MainLayout';
import KennelsContainer from '../Kennels/KennelsContainer';

const Container = styled.div`
  padding: 20px;
`;

const KennelsWrapper = () => (
  <MainLayout>
    <h1>Kennels</h1>
    <Container>
      <KennelsContainer />
    </Container>
  </MainLayout>
);

export default KennelsWrapper;
