// @flow
import React from "react";
import { Route, Switch } from "react-router";

import Header from "./../components/Header";
import About from "./../components/Home";
import Signup from "./../components/Signup";
import Login from "./../components/Login";
import Dashboard from "./../components/Dashboard";
import Profile from "./../components/Profile";

import requiredAuth from "./../components/requiredAuth";

type Props = {
  user: Object,
  updateGlobalState: Function,
  currentPatient: Object
};
export default ({ user, updateGlobalState, currentPatient }: Props) => (
  <div>
    <Header user={user} handleLogout={updateGlobalState} />
    <Switch>
      <Route exact path="/" component={About} />
      <Route
        exact
        path="/login"
        component={() => <Login handleLogin={updateGlobalState} />}
      />
      <Route
        exact
        path="/signup"
        component={() => <Signup handleSignUp={updateGlobalState} />}
      />
      <Route
        exact
        path="/dashboard"
        component={requiredAuth(
          Dashboard,
          user,
          currentPatient,
          updateGlobalState
        )}
      />
      <Route
        exact
        path="/profile"
        component={requiredAuth(
          Profile,
          user,
          currentPatient,
          updateGlobalState
        )}
        // component={() => (
        //   <Profile
        //     user={user}
        //     currentPatient={currentPatient}
        //     updateGlobalState={updateGlobalState}
        //   />
        // )}
      />
      <Route render={() => <h1>Not Found :(</h1>} />
    </Switch>
  </div>
);
