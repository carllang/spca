import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AuthService from '../../auth/AuthService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useSelector((state) => state.router.history);
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    AuthService.login(username, password).then(
      () => {
        history.push('/');
        window.location.reload();
      },
      (error) => {
        const resMessage = (error.response
              && error.response.data
              && error.response.data.message)
            || error.message
            || error.toString();
      },
    );
  };
  return (
    <form onSubmit={handleLogin}>
      <TextField type="text" id="standard-basic" label="Username" fullWidth required helperText="required field" onChange={handleUsernameChange} />
      <TextField type="password" id="standard-basic" label="Password" fullWidth required helperText="required field" onChange={handlePasswordChange} />
      <Button variant="contained" color="primary">
        Login
      </Button>
    </form>
  );
};
export default Login;
