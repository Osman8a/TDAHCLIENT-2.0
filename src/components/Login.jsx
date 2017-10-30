// @flow
import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import InputEmail from "./InputEmail";
import InputPassword from "./InputPassword";
import { apiURL, regex } from "../constants";

type Props = {
  handleLogin: Function
};

const Login = (props: Props) => {
  const token = localStorage.getItem("token");
  if (token) return <Redirect to="/dashboard" />;
  return (
    <div>
      <div className="container">
        <div className="row app-login-wrapper">
          <form
            className="col-12 col-md-6 offset-md-3 app-login"
            onSubmit={Login.onSubmit(props.handleLogin)}
          >
            <InputEmail />
            <InputPassword />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.onSubmit = handleLogin => e => {
  e.preventDefault();

  const { email: { value: email }, password: { value: password } } = e.target;
  const { email: reMail, password: rePassword } = regex;

  if (!reMail.test(email)) {
    console.log("Email Invalido");
    return;
  }

  if (!rePassword.test(password)) {
    console.log("password Invalido");
    return;
  }
  (async () => {
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
