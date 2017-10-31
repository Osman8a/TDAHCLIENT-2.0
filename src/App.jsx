// @flow
import React, { Component } from "react";
import 'font-awesome/css/font-awesome.css'
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

/* eslint-disable */
import "./favicon.ico?output=favicon.ico";
/* eslint-enable */

import "./scss/style.scss";
import Routes from "./routes/routes";

class App extends Component {
  state = {
    user: null,
    currentPatient: null
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      (async () => {
        try {
          const user = await axios.get(
            `https://tdah-rest-api.herokuapp.com/api/advisor/me`,
            {
              headers: { "x-auth": token }
            }
          );
          this.setState({ user });
        } catch (err) {
          throw new Error(err);
        }
      })();
    }
  }

  updateGlobalState = state => this.setState(state);

  render() {
    const { user, currentPatient } = this.state;
    // if (!this.state.user) {
    //   return 'Loading data...';
    // }
    return (
      <Router>
        <Routes
          user={user}
          currentPatient={currentPatient}
          updateGlobalState={this.updateGlobalState}
        />
      </Router>
    );
  }
}

export default App;
