// @flow
import React from 'react';
import Navigation from './Navigation';

type Props = {
  user: {
    data: {
      email: String,
      displayName: String,
      avatar: String,
    },
  },
};

const Profile = ({user}: Props) => {
  if (!user) {
    return 'Loading Data...';
  }

  const username = user.data.email.split ('@')[0];
  const {avatar, displayName, email} = user.data;
  return (
    <div className="root_profile">
      <Navigation user={user.data} />
      <img className="avatar-profile" src={avatar} alt={displayName} />
      <span className="name">{displayName}</span>
      <ul className="data">
        <li>
          <span className="fa fa-user" /> {username}
        </li>
        <li>
          <span className="fa fa-envelope" /> {email}
        </li>
        <li>
          <span className="fa fa-briefcase" />
        </li>
        <li>
          <span className="fa fa-location-arrow" />
        </li>
      </ul>
      <button>Pacientes</button>
    </div>
  );
};

export default Profile;
