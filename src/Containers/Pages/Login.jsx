import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const Login = () => (
  <form>
    <Input type="text" autoFocus fullWidth name="username" />
    <Input type="password" autoFocus fullWidth name="password" />
    <Button variant="contained" color="primary">
      Login
    </Button>
  </form>
);

export default Login;
