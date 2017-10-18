import React, {Component} from 'react';
import axios from 'axios';
export default ComposedComponent => {
  const token = localStorage.getItem ('token');
  async function getUser () {
    try {
      const user = await axios.get (
        `https://tdah-rest-api.herokuapp.com/api/advisor/me`,
        {
          headers: {'x-auth': localStorage.getItem ('token')},
        }
      );

      return user;
    } catch (err) {
      return err;
    }
  }
  console.log (getUser ());
  class Authentication extends Component {
    componentDidMount () {
      if (!token || token === 'undefined') {
        this.props.history.push ('/');
      }
    }

    render () {
      return <ComposedComponent {...this.props} user={getUser ()} />;
    }
  }

  return Authentication;
};
