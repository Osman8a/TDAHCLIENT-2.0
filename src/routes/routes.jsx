import React from 'react';
import {Route, Switch} from 'react-router';

import Header from './../components/Header';
import About from './../components/Home';
import Signup from './../components/Signup';
import Login from './../components/Login';
import Dashboard from './../components/Dashboard';
import Profile from './../components/Profile';

import requiredAuth from './../components/requiredAuth';

export default ({user, handleLogout, handleLogin, handleSignUp}) => {
  return (
    <div>
      <Header user={user} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/" component={About} />
        <Route
          exact
          path="/login"
          component={() => <Login handleLogin={handleLogin} />}
        />
        <Route
          exact
          path="/signup"
          component={() => <Signup handleSignUp={handleSignUp} />}
        />
        <Route
          exact
          path="/dashboard"
          component={requiredAuth (Dashboard, user)}
        />
        <Route exact path="/profile" component={requiredAuth (Profile, user)} />
        <Route render={() => <h1>Not Found :(</h1>} />
      </Switch>
    </div>
  );
};
