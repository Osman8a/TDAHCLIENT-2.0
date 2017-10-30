// @flow
import React from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../constants";

type Props = {
  user: Object,
  handleLogout: Function,
  history: {
    push: Function
  }
};

const Header = ({ user, handleLogout, history }: Props) => {
  const token = localStorage.getItem("token");

  const detectUser = () => {
    if (!user && !token) {
      return [
        <li key="1" className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/login">
            Acceder
          </NavLink>
        </li>,
        <li key="2" className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/signup">
            Registro
          </NavLink>
        </li>
      ];
    }

    return (
      <li key="1" className="nav-item">
        <button
          className="btn btn-primary"
          onClick={Header.onLogout(handleLogout, history)}
        >
          Salir
        </button>
      </li>
    );
  };

  return (
    <header>
      <nav className="page-header navbar navbar-expand-sm navbar-dark">
        {/* eslint-disable*/}
        <Link to={token ? "/dashboard" : "/"} className="navbar-brand">
          <h1 className="h2 page-header__logo">
            <span className="logo-text">TDAH</span>
            <img
              src="http://res.cloudinary.com/osman8a/image/upload/v1506460685/logo_rtnxss.gif"
              className="App-logo"
              alt="logo"
            />
          </h1>
        </Link>
        {/* eslint-enable */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">{detectUser()}</ul>
        </div>
      </nav>
    </header>
  );
};

Header.onLogout = (handleLogout, history) => e => {
  e.preventDefault();
  const token = localStorage.getItem("token");
  axios
    .delete(`${apiURL}/advisor/logout`, {
      headers: { "x-auth": token }
    })
    .then(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("currentPatient");
      handleLogout({ user: null, currentPatient: null });
      history.push("/");
    })
    .catch(err => new Error(err));
};

export default Header;
