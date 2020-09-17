import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AuthService from '../../auth/AuthService';

const Login = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const history = useHistory();

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
        console.log(error.message);
      },
    );
  };
  return (
    <form onSubmit={handleLogin}>
      <TextField autoComplete="false" type="text" id="username" label="Username" fullWidth required helperText="required field" onChange={handleChange} value={state.username} />
      <TextField type="password" id="password" label="Password" fullWidth required helperText="required field" onChange={handleChange} value={state.password} />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
};
export default Login;
