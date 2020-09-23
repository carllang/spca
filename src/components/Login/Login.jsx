import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AuthService from '../../auth/AuthService';

const StyledTextField = styled(TextField)`
  margin-bottom: 10px;
  &:last-of-type {
    margin-bottom: 40px;
  }
`;

const Login = () => {
  AuthService.removeToken();

  const history = useHistory();
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    AuthService.login(state.username, state.password).then(
      () => {
        history.push('/');
        window.location.reload();
      },
      (error) => {
        // eslint-disable-next-line no-console
        console.log(error.message);
      },
    );
  };
  return (
    <form onSubmit={handleLogin}>
      <StyledTextField autoComplete="off" type="text" id="username" label="Username" fullWidth required onChange={handleChange} value={state.username} />
      <StyledTextField type="password" id="password" label="Password" fullWidth required onChange={handleChange} value={state.password} />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
};
export default Login;
