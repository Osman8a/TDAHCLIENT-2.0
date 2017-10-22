// @flow
import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import gravatar from 'gravatar';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';
import InputName from './InputName';
import { apiURL, regex } from '../constants';

type Props = {
  handleSignUp: Function,
};

const Signup = (props: Props) => {
  const token = localStorage.getItem('token');
  if (token) return <Redirect to="/dashboard" />;
  return (
    <div>
      <div className="container">
        <div className="row app-signup-wrapper">
          <form
            className="col-12 col-md-6 offset-md-3 app-signup"
            onSubmit={Signup.onSubmit(props.handleSignUp)}
          >
            <InputEmail />
            <InputPassword />
            <InputName />
            <button
              type="submit"
              className="btn btn-primary"
            >Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

Signup.onSubmit = handleSignUp => e => {
  e.preventDefault();

  const {
    displayName: { value: name },
    email: { value: email },
    password: { value: password },
  } = e.target;

  const {
    email:reMail,
    name:reName,
    password:rePassword
  } = regex;

  if (!reMail.test(email)) {
    console.log('Email Invalido');
    return;
  }

  if (!rePassword.test(password)) {
    console.log('password Invalido');
    return;
  }

  if (!reName.test(name)) {
    console.log('Nombre Invalido');
    return;
  }

  const Gravatar = `http:${gravatar.url(email)}`;

  (async () => {
    try {
      const user = await axios.post(
        `${apiURL}/advisor`,
        {
          displayName: name,
          email,
          password,
          avatar: Gravatar,
        }
      );
      localStorage.setItem('token', user.headers['x-auth']);
      handleSignUp({ user });
    } catch(err) {
      throw new Error(err);
    }
  })();
};

export default Signup;
