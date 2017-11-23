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
    <nav className="nav page-navigation">
      <NavLink className="nav-link" activeClassName="active" to="/profile">
        <img src={user.avatar} alt={user.displayName} />
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/profile">
        {patient
          ? `${patient.name} ${patient.lastname}`
          : "Seleccione un Paciente"}
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/dashboard">
        Dashboard
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/selectarea">
        Juegos
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/memorygame">
        Ayuda
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/tictactoe">
        tictatoe
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/wordsgame">
        WordsGame
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/words">
        WordsGame II
      </NavLink>
      <NavLink
        className="nav-link"
        activeClassName="active"
        to="/completewords"
      >
        WordsGame III
      </NavLink>
    </nav>
  );
};

export default Navigation;
