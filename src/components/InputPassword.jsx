import React from 'react';

const InputPassword = () => (
  <div className="form-group">
    <label
      htmlFor="inputPassword"
      className="w-100"
    >
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
);

export default InputPassword;
