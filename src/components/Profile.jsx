import React from 'react';
import Navigation from './Navigation';

const Profile = ({user}) => {
  if (!user) {
    return 'Loading Data...';
  }
  const {avatar, displayName, email} = user.data;
  return (
    <div>
      <Navigation user={user.data} />
      <img src={avatar} alt={displayName} />
      <span>{displayName}</span>
      <ul>
        <li>
          {email}
        </li>
      </ul>
      <button>Pacientes</button>
    </div>
  );
};

export default Profile;
