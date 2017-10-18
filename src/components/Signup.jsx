import React, {Component} from 'react';
import axios from 'axios';
import gravatar from 'gravatar';

class Signup extends Component {
  handleSignUp = e => {
    e.preventDefault ();
    const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const nameRegExp = /^[a-zA-ZÑñáéíóúÁÉÍÓÚ\s]{2,50}$/;
    const passwordRegExp = /^[\w\d*/.-_ñÑ]{6,50}$/;

    const {
      displayName: {value: name},
      email: {value: email},
      password: {value: password},
    } = e.target;

    if (!emailRegExp.exec (email)) {
      console.log ('Email Invalido');
      return;
    }

    if (!passwordRegExp.exec (password)) {
      console.log ('password Invalido');
      return;
    }

    if (!nameRegExp.exec (name)) {
      console.log ('Nombre Invalido');
      return;
    }

    const Gravatar = 'http:'.concat (gravatar.url (e.target.email.value));

    axios
      .post ('https://tdah-rest-api.herokuapp.com/api/advisor', {
        displayName: e.target.displayName.value,
        email: e.target.email.value,
        password: e.target.password.value,
        avatar: Gravatar,
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
        <div className="row app-signup-wrapper">
          <form
            className="col-12 col-md-6 offset-md-3 app-signup"
            onSubmit={this.handleSignUp}
          >
            <div className="form-group">
              <label htmlFor="inputEmail" className="sr-only">
                Email address
              </label>
              <input
                type="text"
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
            <div className="form-group">
              <label htmlFor="inputName" className="sr-only">
                Nombre y Apellido
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName"
                name="displayName"
                aria-describedby="nameHelp"
                placeholder="Nombre y Apellido"
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
