import React from 'react';
import styled from 'styled-components';
import Layout from '../../Components/Layout';
import LayoutEditorContainer from '../LayoutEditor/LayoutEditorContainer';

const Container = styled.div`
  padding: 20px;
`;

const KennelsWrapper = () => (
  <Layout>
    <h1>Layout Editor</h1>
    <Container>
      <LayoutEditorContainer />
    </Container>
  </Layout>
);

export default KennelsWrapper;
