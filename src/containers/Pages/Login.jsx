import React, { useState } from 'react';
import styled from 'styled-components';
import LoginLayout from '../../components/Layout/LoginLayout';
import Login from '../../components/Login/Login';
import Modal from '../../components/Modal/Modal';

const FormContainer = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 30%;
  margin: 0 auto;
  padding: 20px;
`;

const Details = styled.span`
display flex;
justify-content: flex-end
`;

const LoginPage = () => {
  const [isOpen] = useState(true);

  return (
    <LoginLayout>
      <Container>
        <Modal title="Login" text="Please login to continue" isOpen={isOpen} closeModal={() => {}} openModal={() => {}}>
          <>
            <FormContainer>
              <Login />
            </FormContainer>
            <div>
              <Details>
                {`${process.env.NODE_ENV}`}
              </Details>

            </div>
          </>
        </Modal>
      </Container>
    </LoginLayout>
  );
};

export default LoginPage;
