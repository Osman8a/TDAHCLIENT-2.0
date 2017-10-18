import React from 'react';

const Signup = () => (
  <div className="container">
    <div className="row app-signup-wrapper">
      <form className="col-12 col-md-6 offset-md-3 app-signup">
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
        <div className="form-group">
          <label htmlFor="inputName" className="sr-only">
            Nombre y Apellido
          </label>
          <input
            type="email"
            className="form-control"
            id="inputName"
            aria-describedby="nameHelp"
            placeholder="Nombre y Apellido"
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
);

export default Signup;
