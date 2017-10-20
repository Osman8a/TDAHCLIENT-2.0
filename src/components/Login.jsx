import React from 'react';
import {Redirect} from 'react-router-dom';

const Login = props => {
  if (localStorage.getItem ('token')) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <div className="container">
        <div className="row app-login-wrapper">
          <form
            className="col-12 col-md-6 offset-md-3 app-login"
            onSubmit={props.handleLogin}
          >
            <div className="form-group">
              <label htmlFor="inputEmail" className="w-100">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Correo Electronico"
                />
                <span className="sr-only">Email address</span>
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="w-100">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  name="password"
                  placeholder="Password"
                />
                <span className="sr-only">Password</span>
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
