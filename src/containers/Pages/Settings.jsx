import React from 'react';
import styled from 'styled-components';
import MainLayout from '../../components/Layout/MainLayout';
import SettingsContainer from '../Settings/SettingsContainer';

const Container = styled.div`
  padding: 20px;
`;
const SettingsPage = () => (
  <MainLayout>
    <h2>Settings</h2>
    <Container>
      <SettingsContainer />
    </Container>
  </MainLayout>
);

export default SettingsPage;
