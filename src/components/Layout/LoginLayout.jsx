import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Main = styled.main`
  min-height: 900px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LoginLayout = ({ children }) => (
  <Container>
    <div style={{ width: '100%' }}>
      <Main>{children}</Main>
      <footer>&copy; Carl Lang</footer>
    </div>
  </Container>
);

LoginLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default LoginLayout;
