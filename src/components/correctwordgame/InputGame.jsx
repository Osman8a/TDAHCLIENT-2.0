import React, { Component } from "react";
import ErrorFeedback from "./../Authentication/ErrorFeedback";
import { regex } from "./../../constants";

class InputName extends Component<Props> {
  state = {
    errorAlert: null,
    rendering: this.props.rendering
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
        <label htmlFor="wordGame" className="w-50">
          <input
            type="text"
            className={`inputGame form-control ${this.validateField()}`}
            id="wordGame"
            name="wordGame"
            placeholder="Nombre y Apellido"
            onBlur={InputName.onBlur(this.updateErrorState)}
            onFocus={() =>
              this.updateErrorState({
                errorAlert: null
              })}
          />
          <span className="sr-only">Ingresa la palabra</span>
          {this.state.errorAlert && (
            <ErrorFeedback errorMessage="only letters and spaces" />
          )}
        </label>
      </div>
    );
  }
}

InputName.onBlur = updateErrorState => e => {
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

export default InputName;
