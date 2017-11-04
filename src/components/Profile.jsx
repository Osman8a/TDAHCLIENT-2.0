// @flow
import React from "react";
import Patients from "./Patients";
import RenderPatients from "./RenderPatients";

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
  if (!user) {
    return "Loading Data...";
  }

  const username = user.data.email.split("@")[0];
  const { avatar, displayName, email } = user.data;
  const { patients } = user.data;

  return (
    <section className="root_profile">
      <div className="profile">
        <div className="profile__avatar">
          <img
            className="profile__avatar__img"
            src={avatar}
            alt={displayName}
          />
          <span className="profile__avatar__name">{displayName}</span>
        </div>
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
        <RenderPatients
          patients={patients}
          updateGlobalState={updateGlobalState}
        />
      </div>
    </section>
  );
};

export default Profile;
