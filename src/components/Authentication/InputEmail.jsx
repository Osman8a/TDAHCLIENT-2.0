import React, { Component } from "react";
import ErrorFeedback from "./ErrorFeedback";
import { regex } from "./../../constants";

class InputEmail extends Component {
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
        <label htmlFor="inputEmail" className="w-100">
          <input
            type="text"
            className={`form-control ${this.validateField()}`}
            id="inputEmail"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Correo Electronico"
            onBlur={InputEmail.onBlur(this.updateErrorState)}
            onFocus={() =>
              this.updateErrorState({
                errorAlert: null
              })}
          />
          <span className="sr-only">Email address</span>
          {this.state.errorAlert && (
            <ErrorFeedback errorMessage="Incorrect Email Format. i.e: (john@email.com)" />
          )}
        </label>
      </div>
    );
  }
}

InputEmail.onBlur = updateErrorState => e => {
  e.preventDefault();

  const { value } = e.target;
  const { email: reMail } = regex;

  if (!reMail.test(value)) {
    return updateErrorState({
      errorAlert: true
    });
  }

  return updateErrorState({
    errorAlert: false
  });
};

export default InputEmail;
