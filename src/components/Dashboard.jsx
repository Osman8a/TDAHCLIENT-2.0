import React, {Component} from 'react';
import Navigation from './Navigation';

class Dashboard extends Component {
  componentDidMount () {
    if (this.props.user && this.props.user.status === 401) {
      this.props.history.push ('/');
    }
  }

  render () {
    if (!this.props.user) {
      return <div>Loading User</div>;
    }
    const {user: {data: user}} = this.props;
    return (
      <div>
        <Navigation user={user} />
        <p>Dashboard</p>
        <div>{user.displayName}</div>
      </div>
    );
  }
}

export default Dashboard;
