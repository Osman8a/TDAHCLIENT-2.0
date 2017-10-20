import React from 'react';
import {Redirect} from 'react-router-dom';

const Signup = props => {
  const token = localStorage.getItem ('token');
  if (token) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      <div className="container">
        <div className="row app-signup-wrapper">
          <form
            className="col-12 col-md-6 offset-md-3 app-signup"
            onSubmit={props.handleSignUp}
          >
            <div className="form-group">
              <label htmlFor="inputEmail" className="w-100">
                <input
                  type="text"
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
            <div className="form-group">
              <label htmlFor="inputName" className="w-100">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  name="displayName"
                  aria-describedby="nameHelp"
                  placeholder="Nombre y Apellido"
                />
                <span className="sr-only">Nombre y Apellido</span>
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
