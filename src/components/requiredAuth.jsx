import React, {Component} from 'react';
import axios from 'axios';

export default (ComposedComponent, user) => {
  const token = localStorage.getItem ('token');
  class Authentication extends Component {
    componentDidMount () {
      if (!token || token === 'undefined') {
        this.props.history.push ('/');
      }

      // axios
      //   .get (`https://tdah-rest-api.herokuapp.com/api/advisor/me`, {
      //     headers: {'x-auth': token},
      //   })
      //   .then (user => {
      //     this.setState ({
      //       user,
      //     });
      //   });
    }

    render () {
      return <ComposedComponent {...this.props} user={user} />;
    }
  }

  return Authentication;
};
