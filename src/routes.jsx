import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Kennels from './containers/Pages/Kennels';
import Animals from './containers/Pages/Animals';
import Home from './containers/Pages/index';
import LayoutEditor from './containers/Pages/LayoutEditor';
import Login from './containers/Pages/Login';
import PrivateRoute from './auth/ProtectedRoute';

const Routes = () => (
  <BrowserRouter>
    <Switch>

      <PrivateRoute exact path="/" component={Home} />

      <PrivateRoute exact path="/animals" component={Animals} />

      <PrivateRoute exact path="/kennels" component={Kennels} />

      <PrivateRoute exact path="/layoutEditor" component={LayoutEditor} />

      <Route exact path="/login" component={Login} />

    </Switch>
  </BrowserRouter>
);

export default Routes;
