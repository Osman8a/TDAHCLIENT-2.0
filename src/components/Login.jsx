import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component {
  handleLogin = e => {
    e.preventDefault ();
    const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const passwordRegExp = /^[\w\d*/.-_ñÑ]{6,50}$/;

    const {email: {value: email}, password: {value: password}} = e.target;

    if (!emailRegExp.exec (email)) {
      console.log ('Email Invalido');
      return;
    }

    if (!passwordRegExp.exec (password)) {
      console.log ('password Invalido');
      return;
    }

    axios
      .post ('https://tdah-rest-api.herokuapp.com/api/advisor/login', {
        email: e.target.email.value,
        password: e.target.password.value,
      })
      .then (newUser => {
        localStorage.setItem ('token', newUser.headers['x-auth']);
        this.props.history.push ('/dashboard');
      })
      .catch (err => new Error (err));
  };
  render () {
    return (
      <div className="container">
        <div className="row app-login-wrapper">
          <form
            className="col-12 col-md-6 offset-md-3 app-login"
            onSubmit={this.handleLogin}
          >
            <div className="form-group">
              <label htmlFor="inputEmail" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Correo Electronico"
              />
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="sr-only">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
