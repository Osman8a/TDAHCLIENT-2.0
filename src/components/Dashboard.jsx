// @flow
import React, { Component } from "react";

type Props = {
  user: {
    status: Number
  },
  history: {
    push: Function
  }
};

class Dashboard extends Component<Props> {
  componentDidMount() {
    if (this.props.user && this.props.user.status === 401) {
      this.props.history.push("/");
    }
  }

  render() {
    if (!this.props.user) {
      return <div>Loading User</div>;
    }
    const { user: { data: user } } = this.props;
    const localPatient = JSON.parse(localStorage.getItem("currentPatient"));
    return (
      <div>
        <p>Dashboard</p>
        <div>{user.displayName}</div>
        <div>
          {localPatient && `Trabajando con el Paciente: ${localPatient.name}`}
        </div>
      </div>
    );
  }
}

export default Dashboard;
