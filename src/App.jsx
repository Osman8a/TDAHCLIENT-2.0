// @flow
import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import { apiURL } from 'constants';

/* eslint-disable */
import './favicon.ico?output=favicon.ico';
/* eslint-enable */

import './scss/style.scss';
import Routes from './routes/routes';

class App extends Component {
  state = {
    user: null,
  };

  componentDidMount () {
    const token = localStorage.getItem ('token');
    if (token) {
      axios.get (`${apiURL}/advisor/me`, {
        headers: {'x-auth': token},
      }).then (user => this.setState ({ user }));
    }
  }

  updateGlobalState = state => this.setState(state);

  render () {
    // if (!this.state.user) {
    //   return 'Loading data...';
    // }
    return (
      <Router>
        <Routes
          user={this.state.user}
          updateGlobalState={this.updateGlobalState}
        />
      </Router>
    );
  }
}

export default App;
