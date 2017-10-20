import React, {Component} from 'react';

export default (ComposedComponent, user) => {
  const token = localStorage.getItem ('token');
  class Authentication extends Component {
    componentDidMount () {
      if (!token || token === 'undefined') {
        this.props.history.push ('/');
      }
    }

    render () {
      return <ComposedComponent {...this.props} user={user} />;
    }
  }

  return Authentication;
};
