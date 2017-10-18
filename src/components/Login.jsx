import React from 'react';

const Login = () => (
  <div className="container">
    <div className="row app-login-wrapper">
      <form className="col-12 col-md-6 offset-md-3 app-login">
        <div className="form-group">
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="Correo Electronico"
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input
            type="password"
            className="form-control"
            id="inputPassword"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
);

export default Login;
