import React from 'react';
import styled from 'styled-components';
import Layout from '../../Components/Layout';
import KennelsContainer from '../Kennels/KennelsContainer';

const Container = styled.div`
  padding: 20px;
`;

const KennelsWrapper = () => (
  <Layout>
    <h1>Kennels</h1>
    <Container>
      <KennelsContainer />
    </Container>
  </Layout>
);

export default KennelsWrapper;
