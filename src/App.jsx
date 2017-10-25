// @flow
import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router} from 'react-router-dom';

/* eslint-disable */
import './favicon.ico?output=favicon.ico';
/* eslint-enable */

import './scss/style.scss';
import Routes from './routes/routes';

class App extends Component {
  state = {
    user: null,
    patients: null,
  };

  componentDidMount () {
    const token = localStorage.getItem ('token');
    if (token) {
      (async () => {
        try {
          const user = await axios.get (
            `https://tdah-rest-api.herokuapp.com/api/advisor/me`,
            {
              headers: {'x-auth': token},
            }
          );

          const patients = await axios.get (
            `https://tdah-rest-api.herokuapp.com/api/patients`,
            {
              headers: {'x-auth': token},
            }
          );

          this.setState ({user, patients});
        } catch (err) {
          throw new Error (err);
        }
      }) ();
    }
  }

  updateGlobalState = state => this.setState (state);

  render () {
    const {user, patients} = this.state;
    console.log (patients);
    // if (!this.state.user) {
    //   return 'Loading data...';
    // }
    return (
      <Router>
        <Routes
          user={user}
          patients={patients}
          updateGlobalState={this.updateGlobalState}
        />
      </Router>
    );
  }
}

export default App;
