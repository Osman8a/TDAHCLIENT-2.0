import React, { Component } from "react";
import ErrorFeedback from "./ErrorFeedback";
import { regex } from "./../../constants";

class InputPassword extends Component {
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
        <label htmlFor="inputPassword" className="w-100">
          <input
            type="password"
            className={`form-control ${this.validateField()}`}
            id="inputPassword"
            name="password"
            placeholder="Password"
            onBlur={InputPassword.onBlur(this.updateErrorState)}
            onFocus={() =>
              this.updateErrorState({
                errorAlert: null
              })}
          />
          <span className="sr-only">Password</span>
          {this.state.errorAlert && (
            <ErrorFeedback errorMessage="only Alpha numeric characters and (*/.-_ñÑ) and at least 6" />
          )}
        </label>
      </div>
    );
  }
}

InputPassword.onBlur = updateErrorState => e => {
  e.preventDefault();

  const { value } = e.target;
  const { password: rePassword } = regex;
  if (!rePassword.test(value)) {
    return updateErrorState({
      errorAlert: true
    });
  }

  return updateErrorState({
    errorAlert: false
  });
};

export default InputPassword;
