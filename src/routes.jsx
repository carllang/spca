import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Kennels from './containers/Pages/Kennels';
import Admission from './containers/Pages/Admission';
import Home from './containers/Pages/index';
import LayoutEditor from './containers/Pages/LayoutEditor';
import Login from './containers/Pages/Login';
import PrivateRoute from './auth/ProtectedRoute';

const Routes = () => (
  <BrowserRouter>
    <Switch>

      <PrivateRoute exact path="/" component={Home} />

      <PrivateRoute exact path="/admission" component={Admission} />

      <PrivateRoute exact path="/kennels" component={Kennels} />

      <PrivateRoute exact path="/layoutEditor" component={LayoutEditor} />

      <Route exact path="/login" component={Login} />

    </Switch>
  </BrowserRouter>
);

export default Routes;
