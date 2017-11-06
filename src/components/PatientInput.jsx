// @flow
import React, { Component } from "react";
import ErrorFeedback from "./Authentication/ErrorFeedback";
import { regex } from "./../constants";

type Props = {
  name: String,
  placeHolder: String,
  id: String
};

class PatientInput extends Component<Props> {
  state = {
    errorAlert: null
  };

  validateField = () => {
    switch (this.state.errorAlert) {
      case true:
        return "is-invalid";
      case false:
        return "is-valid";
      default:
        return "";
    }
  };

  updateErrorState = state => this.setState(state);
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id} className="w-100">
          <input
            type="text"
            className={`form-control ${this.validateField()}`}
            id={this.props.id}
            name={this.props.name}
            placeholder={this.props.placeHolder}
            onBlur={PatientInput.onBlur(this.updateErrorState)}
            onFocus={() =>
              this.updateErrorState({
                errorAlert: null
              })}
          />
          <span className="sr-only">Nombre y Apellido</span>
          {this.state.errorAlert && (
            <ErrorFeedback errorMessage="only letters and spaces" />
          )}
        </label>
      </div>
    );
  }
}

PatientInput.onBlur = updateErrorState => e => {
  e.preventDefault();

  const { value } = e.target;
  const { name: reName } = regex;

  if (!reName.test(value)) {
    return updateErrorState({
      errorAlert: true
    });
  }

  return updateErrorState({
    errorAlert: false
  });
};

export default PatientInput;
