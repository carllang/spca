import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Login = () => (
  <form>
    <TextField type="text" id="standard-basic" label="Username" fullWidth required helperText="required field" />
    <TextField type="password" id="standard-basic" label="Password" fullWidth required helperText="required field" />
    <Button variant="contained" color="primary">
      Login
    </Button>
  </form>
);
export default Login;
