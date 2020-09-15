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
      <Route exact path="/login" component={() => <Login />} />

      <PrivateRoute>
        <Route exact path="/" component={() => <Home />} />
        <Route exact path="/admission" component={() => <Admission />} />
        <Route exact path="/kennels" component={() => <Kennels />} />
        <Route exact path="/layoutEditor" component={() => <LayoutEditor />} />
      </PrivateRoute>

    </Switch>
  </BrowserRouter>
);

export default Routes;
