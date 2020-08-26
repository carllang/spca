import React from 'react';
import styled from 'styled-components';
import Nav from '../Nav';
import Sidebar from '../Sidebar';

const Main = styled.main`
  min-height: 900px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Layout = ({ children }) => (
  <Container>
    <Sidebar />
    <div style={{ width: '100%' }}>
      <header>
        <Nav />
      </header>

      <Main>{children}</Main>
      <footer>&copy; Carl Lang</footer>
    </div>
  </Container>
);

export default Layout;
