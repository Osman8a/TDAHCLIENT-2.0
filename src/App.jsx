import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router} from 'react-router-dom';

/* eslint-disable */
import './favicon.ico?output=favicon.ico';
/* eslint-enable */

import './scss/style.scss';

import Routes from './routes/routes';

const token = localStorage.getItem ('token');

class App extends Component {
  state = {
    user: null,
  };

  componentDidMount () {
    if (token) {
      axios
        .get (`https://tdah-rest-api.herokuapp.com/api/advisor/me`, {
          headers: {'x-auth': token},
        })
        .then (user => {
          this.setState ({
            user,
          });
        });
    }
  }

  handleLogin (e) {
    e.preventDefault ();
    const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegExp = /^[\w\d*/.-_ñÑ]{6,50}$/;

    const {email: {value: email}, password: {value: password}} = e.target;

    if (!emailRegExp.exec (email)) {
      console.log ('Email Invalido');
      return;
    }

    if (!passwordRegExp.exec (password)) {
      console.log ('password Invalido');
      return;
    }

    axios
      .post ('https://tdah-rest-api.herokuapp.com/api/advisor/login', {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then (user => {
        localStorage.setItem ('token', user.headers['x-auth']);
        this.setState ({
          user,
        });
        this.props.history.push ('/dashboard');
      })
      .catch (err => new Error (err));
  }

  handleLogout = e => {
    e.preventDefault ();
    axios
      .delete ('https://tdah-rest-api.herokuapp.com/api/advisor/logout', {
        headers: {'x-auth': token},
      })
      .then (() => {
        localStorage.removeItem ('token');
        this.setState ({
          user: null,
        });
        this.props.history.push ('/');
      })
      .catch (err => new Error (err));
  };

  render () {
    // if (!this.state.user) {
    //   return 'Loading data...';
    // }
    return (
      <Router>
        <Routes
          user={this.state.user}
          handleLogout={this.handleLogout}
          handleLogin={this.handleLogin}
        />
      </Router>
    );
  }
}

export default App;
