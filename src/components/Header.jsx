import React from 'react';
import {NavLink} from 'react-router-dom';
import reactLogo from './../img/logo.svg';

const Header = () => (
  <header className="header">
    <img className="logo" src={reactLogo} alt="react logo" />
    <h1 className="title">React & Redux <br /> Boilerplate</h1>
    <ul className="nav">
      <li className="item">
        <NavLink to="/" className="link" exact activeClassName="active">
          {' '}Home{' '}
        </NavLink>
      </li>
      <li className="item">
        <NavLink to="/features" className="link" activeClassName="active">
          {' '}Features{' '}
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
