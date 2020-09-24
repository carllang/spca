import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Nav from '../Nav';
import Sidebar from '../Sidebar';
import useBrowserPrompt from '../../hooks/browserPrompt';

const Main = styled.main`
  min-height: 900px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainLayout = ({ children }) => {
  useBrowserPrompt();
  return (
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
};

MainLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
export default MainLayout;
