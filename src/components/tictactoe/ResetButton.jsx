import React from "react";

export default class ResetButton extends React.Component {
  render() {
    return (
      <button className="button_tic" onClick={this.props.reset}>
        Reset
      </button>
    );
  }
}
