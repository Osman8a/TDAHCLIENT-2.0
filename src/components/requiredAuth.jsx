// @flow
import React, { Component } from "react";

type Props = {
  history: {
    push: Function
  }
};

export default (
  ComposedComponent,
  user: Object,
  updateGlobalState: Function
) => {
  const token = localStorage.getItem("token");
  class Authentication extends Component<Props> {
    componentDidMount() {
      if (!token || token === "undefined") {
        this.props.history.push("/");
      }
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          user={user}
          updateGlobalState={updateGlobalState}
        />
      );
    }
  }

  return Authentication;
};
