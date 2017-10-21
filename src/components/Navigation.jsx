// @flow
import React from 'react';
import {NavLink} from 'react-router-dom';

type Props = {
  user: {
    displayName: String,
    avatar: String,
  },
};
const Navigation = ({user}: Props) => (
  <nav className="nav">
    <NavLink
      className="nav-link"
      activeClassName="active"
      to="/profile"
    >
      <img
        src={user.avatar}
        alt={user.displayName}
      />
    </NavLink>
    <NavLink
      className="nav-link"
      activeClassName="active"
      to="/"
    >
      Terapia
    </NavLink>
    <NavLink
      className="nav-link"
      activeClassName="active"
      to="/"
    >
      Ayuda
    </NavLink>
  </nav>
);

export default Navigation;
