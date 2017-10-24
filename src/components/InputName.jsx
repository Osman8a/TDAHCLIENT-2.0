import React from "react";

const InputName = () => (
  <div className="form-group">
    <label htmlFor="inputName" className="w-100">
      <input
        type="text"
        className="form-control"
        id="inputName"
        name="displayName"
        aria-describedby="nameHelp"
        placeholder="Nombres"
      />
      <span className="sr-only">Nombre y Apellido</span>
    </label>
  </div>
);

export default InputName;
