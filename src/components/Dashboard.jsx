// @flow
import React, { Component } from "react";
import Navigation from "./Navigation";

type Props = {
  user: {
    status: Number
  },
  history: {
    push: Function
  },
  currentPatient: Object,
  updateGlobalState: Function
};

class Dashboard extends Component<Props> {
  componentDidMount() {
    if (this.props.user && this.props.user.status === 401) {
      this.props.history.push("/");
    }
  }

  render() {
    console.log(this.props.updateGlobalState);
    if (!this.props.user) {
      return <div>Loading User</div>;
    }
    const { user: { data: user }, currentPatient } = this.props;
    console.log(currentPatient);
    return (
      <div>
        <Navigation user={user} currentPatient={currentPatient} />
        <p>Dashboard</p>
        <div>{user.displayName}</div>
        <div>
          {currentPatient &&
            `Trabajando con el Paciente: ${this.props.currentPatient.name}`}
        </div>
      </div>
    );
  }
}

export default Dashboard;
