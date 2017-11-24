// @flow
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";
import { apiURL, regex } from "./../../constants";

type Props = {
  handleLogin: Function
};

class Login extends Component<Props> {
  state = {
    errorAlert: null
  };

  validateField = () => {
    switch (this.state.errorAlert) {
      case true:
        return (
          <div className="alert alert-danger app-auth__msg" role="alert">
            Check the error messages out in the Login Field
          </div>
        );
      case false:
        return (
          <div className="alert alert-success app-auth__msg" role="alert">
            Authentication Success Accessing the Dashboard...
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
              onSubmit={Login.onSubmit(
                this.props.handleLogin,
                this.updateErrorAlert
              )}
            >
              <h2 className="auth-title">Acceder</h2>
              <InputEmail />
              <InputPassword />
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

Login.onSubmit = (handleLogin, updateErrorAlert) => e => {
  e.preventDefault();

  const { email: { value: email }, password: { value: password } } = e.target;
  const { email: reMail, password: rePassword } = regex;

  if (!reMail.test(email) || !rePassword.test(password)) {
    return updateErrorAlert({
      errorAlert: true
    });
  }

  updateErrorAlert({
    errorAlert: false
  });

  return (async () => {
    try {
      const user = await axios.post(`${apiURL}/advisor/login`, {
        email,
        password
      });

      localStorage.setItem("token", user.headers["x-auth"]);

      const getUser = await axios.get(
                `https://tdah-rest-api.herokuapp.com/api/advisor/me`,
                {
                  headers: { "x-auth": localStorage.getItem("token") }
                }
              );
      handleLogin({ user: getUser });
    } catch (err) {
      throw new Error(err);
    }
  })();
};

export default Login;
