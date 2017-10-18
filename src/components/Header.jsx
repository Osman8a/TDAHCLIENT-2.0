import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="page-header navbar navbar-expand-sm navbar-dark">
      {/* eslint-disable*/}
      <Link to="/" className="navbar-brand">
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
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/login">
              Acceder
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/signup">
              Registro
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
