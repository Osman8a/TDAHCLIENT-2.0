// @flow
import React from "react";
import { Route, Switch } from "react-router";

import Header from "./../components/Header";
import Navigation from "./../components/Navigation";
import Footer from "./../components/Footer";
import About from "./../components/Home";
import Signup from "./../components/Authentication/Signup";
import Login from "./../components/Authentication/Login";
import Dashboard from "./../components/Dashboard";
import Profile from "./../components/Profile";
import AreaList from "../components/AreaList";
import GameList from "../components/GameList";
import requiredAuth from "./../components/Authentication/requiredAuth";
import MemoryGame from "./../components/memorygame/MemoryGame";
import TicTacToe from "./../components/tictactoe/TicTacToe";
import WordsGame from "./../components/wordsgame/WordsGame";
import CorrectWordGame from './../components/correctwordgame/AppGame';
import words from './../components/words/AppGame';

type Props = {
  user: Object,
  updateGlobalState: Function,
  currentPatient: Object
};
export default ({ user, updateGlobalState, currentPatient }: Props) => (
  <div>
    <Header user={user} handleLogout={updateGlobalState} />
    {user && <Navigation user={user.data} />}
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
      />
      <Route
        exact
        path="/selectarea"
        component={requiredAuth(
          AreaList,
          user,
          currentPatient,
          updateGlobalState
        )}
      />
      <Route
        path="/selectarea/:gameType"
        component={requiredAuth(
          GameList,
          user,
          currentPatient,
          updateGlobalState
        )}
      />
      <Route
        exact
        path="/memorygame"
        component={requiredAuth(MemoryGame, user, updateGlobalState)}
      />
      <Route
        exact
        path="/tictactoe"
        component={requiredAuth(TicTacToe, user, updateGlobalState)}
      />
      <Route
        exact
        path="/wordsgame"
        component={requiredAuth(WordsGame, user, updateGlobalState)}
      />
      <Route
        exact
        path="/words"
        component={requiredAuth(CorrectWordGame, user, updateGlobalState)}
      />
      <Route
      exact
      path="/analysiswords"
      component={requiredAuth(words, user, updateGlobalState)}
    />

      
      
      <Route render={() => <h1>Not Found :(</h1>} />
    </Switch>
    <Footer />
  </div>
);
