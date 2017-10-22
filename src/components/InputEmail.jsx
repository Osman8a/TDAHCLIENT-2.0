import React from 'react';

const InputEmail = () => (
  <div className="form-group">
    <label
      htmlFor="inputEmail"
      className="w-100"
    >
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
);

export default InputEmail;
