import React, { Component } from "react";
import ErrorFeedback from "../Authentication/ErrorFeedback";
import { regex } from "./../../constants";

class InputName extends Component {
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
        <label htmlFor="word" className="w-100">
          <input
            type="text"
            className={`form-control ${this.validateField()}`}
            id="wordQ"
            name="wordQ"
            placeholder="Introduce la letra"
            onBlur={InputName.onBlur(this.updateErrorState)}
            onFocus={() =>
              this.updateErrorState({
                errorAlert: null
              })}
          />
          <input
            type="text"
            className={`form-control ${this.validateField()}`}
            id="wordQ1"
            name="wordQ1"
            placeholder="Introduce la letra"
            onBlur={InputName.onBlur(this.updateErrorState)}
            onFocus={() =>
              this.updateErrorState({
                errorAlert: null
              })}
          />
          <input
            type="text"
            className={`form-control ${this.validateField()}`}
            id="wordQ2"
            name="wordQ2"
            placeholder="Introduce la letra"
            onBlur={InputName.onBlur(this.updateErrorState)}
            onFocus={() =>
              this.updateErrorState({
                errorAlert: null
              })}
          />
          <span className="sr-only">Nombre y Apellido</span>
          {this.state.errorAlert && (
            <ErrorFeedback errorMessage="debes completar el campo" />
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
