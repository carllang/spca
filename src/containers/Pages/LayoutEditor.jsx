import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../components/Layout/MainLayout';
import LayoutEditorContainer from '../LayoutEditor/LayoutEditorContainer';

const Container = styled.div`
  padding: 20px;
`;

const KennelsWrapper = () => (
  <MainLayout>
    <h2>Layout Editor</h2>
    <Container>
      <LayoutEditorContainer />
    </Container>
  </MainLayout>
);

export default KennelsWrapper;
