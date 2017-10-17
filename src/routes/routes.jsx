import React from 'react';
import {Route, Switch} from 'react-router';

import About from '../containers/About';
import Header from '../components/Header';
import Features from '../components/Features';

export default () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/features" component={Features} />
      <Route render={() => <h1>Not Found :(</h1>} />
    </Switch>
  </div>
);
