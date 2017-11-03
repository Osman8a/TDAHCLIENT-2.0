// @flow
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import gravatar from "gravatar";
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";
import InputName from "./InputName";
import { apiURL, regex } from "./../../constants";

type Props = {
  handleSignUp: Function
};

class Signup extends Component<Props> {
  state = {
    errorAlert: null
  };

  validateField = () => {
    switch (this.state.errorAlert) {
      case true:
        return (
          <div className="alert alert-danger app-auth__msg" role="alert">
            Check the error messages out in the Signup Field
          </div>
        );
      case false:
        return (
          <div className="alert alert-success app-auth__msg" role="alert">
            Account Created, Accessing the Dashboard...
          </div>
        );
      default:
        return "";
    }
  };

  updateErrorAlert = state => this.setState(state);

  render() {
    const token = localStorage.getItem("token");
    if (token) return <Redirect to="/dashboard" />;
    return (
      <div>
        <div className="container">
          <div className="row app-auth-wrapper">
            <form
              className="col-12 col-md-6 offset-md-3 app-auth"
              onSubmit={Signup.onSubmit(
                this.props.handleSignUp,
                this.updateErrorAlert
              )}
            >
              <InputEmail />
              <InputPassword />
              <InputName />
              <button type="submit" className="app-auth__btn">
                Submit
              </button>
            </form>
          </div>
        </div>
        {this.validateField()}
      </div>
    );
  }
}

Signup.onSubmit = (handleSignUp, updateErrorAlert) => e => {
  e.preventDefault();

  const {
    displayName: { value: name },
    email: { value: email },
    password: { value: password }
  } = e.target;

  const { email: reMail, name: reName, password: rePassword } = regex;

  if (!reMail.test(email) || !reName.test(name) || !rePassword.test(password)) {
    return updateErrorAlert({
      errorAlert: true
    });
  }

  updateErrorAlert({
    errorAlert: false
  });

  const Gravatar = `http:${gravatar.url(email)}`;

  return (async () => {
    try {
      const user = await axios.post(`${apiURL}/advisor`, {
        displayName: name,
        email,
        password,
        avatar: Gravatar
      });
      localStorage.setItem("token", user.headers["x-auth"]);
      handleSignUp({ user });
    } catch (err) {
      throw new Error(err);
    }
  })();
};

export default Signup;
