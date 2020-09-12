import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Kennels from './Containers/Pages/Kennels';
import Admission from './Containers/Pages/Admission';
import Home from './Containers/Pages/index';
import LayoutEditor from './Containers/Pages/LayoutEditor';
import Login from './Containers/Pages/Login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <Home />} />

      <Route exact path="/login" component={() => <Login />} />
      <Route exact path="/admission" component={() => <Admission />} />
      <Route exact path="/kennels" component={() => <Kennels />} />

      <Route exact path="/layoutEditor" component={() => <LayoutEditor />} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
