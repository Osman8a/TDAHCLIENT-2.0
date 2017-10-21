// @flow
import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router} from 'react-router-dom';
import gravatar from 'gravatar';

/* eslint-disable */
import './favicon.ico?output=favicon.ico';
/* eslint-enable */

import './scss/style.scss';

import Routes from './routes/routes';

const token = localStorage.getItem ('token');

type Props = {
  history: {
    push: Function,
  },
};

class App extends Component<Props> {
  constructor (props) {
    super (props);
    this.state = {
      user: null,
    };
    this.handleLogin = this.handleLogin.bind (this);
    this.handleLogout = this.handleLogout.bind (this);
    this.handleSignUp = this.handleSignUp.bind (this);
  }

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

  handleSignUp = e => {
    e.preventDefault ();
    const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const nameRegExp = /^[a-zA-ZÑñáéíóúÁÉÍÓÚ\s]{2,50}$/;
    const passwordRegExp = /^[\w\d*/.-_ñÑ]{6,50}$/;

    const {
      displayName: {value: name},
      email: {value: email},
      password: {value: password},
    } = e.target;

    if (!emailRegExp.exec (email)) {
      console.log ('Email Invalido');
      return;
    }

    if (!passwordRegExp.exec (password)) {
      console.log ('password Invalido');
      return;
    }

    if (!nameRegExp.exec (name)) {
      console.log ('Nombre Invalido');
      return;
    }

    const Gravatar = 'http:'.concat (gravatar.url (e.target.email.value));

    (async () => {
      try {
        const user = await axios.post (
          'https://tdah-rest-api.herokuapp.com/api/advisor',
          {
            displayName: e.target.displayName.value,
            email: e.target.email.value,
            password: e.target.password.value,
            avatar: Gravatar,
          }
        );
        localStorage.setItem ('token', user.headers['x-auth']);
        this.setState ({
          user,
        });
      } catch (err) {
        throw new Error (err);
      }
    }) ();
  };

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
    (async () => {
      try {
        const user = await axios.post (
          'https://tdah-rest-api.herokuapp.com/api/advisor/login',
          {
            email: e.target.email.value,
            password: e.target.password.value,
          }
        );
        localStorage.setItem ('token', user.headers['x-auth']);
        this.setState ({
          user,
        });
      } catch (err) {
        throw new Error (err);
      }
    }) ();
  }

  handleLogout = e => {
    e.preventDefault ();
    // (async () => {
    //   try {
    //     await axios.delete (
    //       'https://tdah-rest-api.herokuapp.com/api/advisor/logout',
    //       {
    //         headers: {'x-auth': token},
    //       }
    //     );
    //   } catch (err) {
    //     throw new Error (err);
    //   } finally {
    //     localStorage.removeItem ('token');
    //     this.setState ({
    //       user: null,
    //     });
    //     // this.props.history.push ('/');
    //   }
    // }) ();
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
    console.log (this.state.user);
    return (
      <Router>
        <Routes
          user={this.state.user}
          handleLogout={this.handleLogout}
          handleLogin={this.handleLogin}
          handleSignUp={this.handleSignUp}
        />
      </Router>
    );
  }
}

export default App;
