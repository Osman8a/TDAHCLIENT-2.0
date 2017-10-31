// @flow
import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  user: {
    displayName: String,
    avatar: String
  }
};
const Navigation = ({ user }: Props) => {
  const patient = JSON.parse(localStorage.getItem("currentPatient"));
  return (
    <nav className="nav">
      <NavLink className="nav-link" activeClassName="active" to="/profile">
        <img src={user.avatar} alt={user.displayName} />
      </NavLink>
      <p className="nav-link">
        {patient
          ? `${patient.name} ${patient.lastname}`
          : "Seleccione un Paciente"}
      </p>
      <NavLink className="nav-link" activeClassName="active" to="selectarea">
        Juegos
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/memorygame">
        Ayuda
      </NavLink>
    </nav>
  );
};

export default Navigation;
