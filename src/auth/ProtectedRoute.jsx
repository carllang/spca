import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import AuthService from './AuthService';

const PrivateRoute = ({ children, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (AuthService.isAuthenticated ? (
      children
    ) : (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location },
        }}
      />
    ))}
  />
);

export default PrivateRoute;
