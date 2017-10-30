// @flow
import React from "react";
import { Redirect } from "react-router-dom";
import Navigation from "./Navigation";
import Patients from "./Patients";

type Props = {
  user: {
    data: {
      email: String,
      displayName: String,
      avatar: String,
      patients: Array
    }
  },
  updateGlobalState: Function
};

const Profile = ({ user, updateGlobalState }: Props) => {
  const token = localStorage.getItem("token");
  if (!token || token === "undefined") {
    return <Redirect to="/" />;
  }

  if (!user) {
    return "Loading Data...";
  }

  const username = user.data.email.split("@")[0];
  const { avatar, displayName, email } = user.data;
  const { patients } = user.data;

  const renderPatients = () => {
    if (patients.length === 0) {
      return "No Patients Yet... Register One!";
    }

    const formatDate = timeStamp => {
      const date = new Date(timeStamp);
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      };
      return date.toLocaleString("es-VE", options);
    };

    return patients.map(patient => (
      /* eslint-disable */
      <tr key={patient._id}>
        {/* eslint-enable */}
        <th scope="row">1</th>
        <td>
          {patient.name} {patient.lastname}
        </td>
        <td>{formatDate(patient.age)}</td>
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
      <Patients updateGlobalState={updateGlobalState} />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Edad</th>
            <th scope="col">avance</th>
          </tr>
        </thead>
        <tbody>{renderPatients()}</tbody>
      </table>
    </div>
  );
};

export default Profile;
