import React, {Component} from 'react';
import axios from 'axios';

class Dashboard extends Component {
  handleLogout = e => {
    e.preventDefault ();

    axios
      .delete ('https://tdah-rest-api.herokuapp.com/api/advisor/logout', {
        headers: {'x-auth': localStorage.getItem ('token')},
      })
      .then (() => {
        localStorage.removeItem ('token');
        this.props.history.push ('/');
      })
      .catch (err => new Error (err));
  };

  render () {
    return (
      <div>
        <p>Dashboard</p>
        <button className="btn btn-primary" onClick={this.handleLogout}>
          Logout
        </button>
      </div>
    );
  }
}

export default Dashboard;
