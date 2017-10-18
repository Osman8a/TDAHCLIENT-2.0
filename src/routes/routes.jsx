import React from 'react';
import {Route, Switch} from 'react-router';

import About from './../components/Home';
import Header from './../components/Header';
import Signup from './../components/Signup';
import Login from './../components/Login';
import Dashboard from './../components/Dashboard';

import requiredAuth from './../components/requiredAuth';

export default () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/dashboard" component={requiredAuth (Dashboard)} />
      <Route render={() => <h1>Not Found :(</h1>} />
    </Switch>
  </div>
);
