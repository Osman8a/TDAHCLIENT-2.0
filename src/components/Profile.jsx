// @flow
import React from 'react';
import Navigation from './Navigation';
import Patients from './Patients';

type Props = {
  user: {
    data: {
      email: String,
      displayName: String,
      avatar: String,
    },
  },
  patients: Object,
  updateGlobalState: Function,
};

const Profile = ({user, patients, updateGlobalState}: Props) => {
  if (!user) {
    return 'Loading Data...';
  }

  const username = user.data.email.split ('@')[0];
  const {avatar, displayName, email} = user.data;

  const renderPatients = () => {
    const {data} = patients;
    console.log (data, 'datossdfhsds');
    if (!data) {
      return 'getting patients';
    }
    return data.map (patient => (
      <tr key={patient._id}>
        <th scope="row">1</th>
        <td>{patient.name} {patient.lastname}</td>
        <td>{patient.age}</td>
        <td>{patient.avance}</td>
      </tr>
    ));
  };

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
      <Patients updateGlobalState={updateGlobalState} patients={patients} />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">avance</th>
          </tr>
        </thead>
        <tbody>
          {renderPatients ()}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
