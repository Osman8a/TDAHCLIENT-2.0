// @flow
import React from "react";
import axios from "axios";
import { apiURL } from "../constants";

type Props = {
  patients: Array,
  updateGlobalState: Function
};

const RenderPatients = ({ patients, updateGlobalState }: Props) => {
  if (!patients || patients.length === 0) {
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
  const calculateAge = birthTimeStamp => {
    const age = ((new Date().getTime() - birthTimeStamp) / 31536000000).toFixed(
      0
    );
    if (age < 1) {
      const ageInMonths = `${((new Date().getTime() - birthTimeStamp) /
        2678400000
      ).toFixed(0)} Meses`;
      return ageInMonths;
    }
    return `${age} Años`;
  };

  const localPatient = JSON.parse(localStorage.getItem("currentPatient"));

  return (
    <table className="patients table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Nacimiento</th>
          <th scope="col">Edad</th>
          <th scope="col">avance</th>
          <th scope="col">Usar Paciente</th>
          <th scope="col">Borrar Paciente</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient, index) => (
          <tr
            key={patient._id}
            className={`${patient &&
              localPatient &&
              patient._id === localPatient._id &&
              "current-patient"}`}
          >
            <th scope="row">{index + 1}</th>
            <td>
              {patient.name} {patient.lastname}
            </td>
            <td>{formatDate(patient.age)}</td>
            <td>{calculateAge(patient.age)}</td>
            <td>{!patient.avance ? "-" : patient.avance}</td>
            <td>
              <button
                className="btn btn-success"
                onClick={RenderPatients.onGetPatient(
                  updateGlobalState,
                  patient
                )}
              >
                Usar este
              </button>
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={RenderPatients.onRemovePatient(
                  updateGlobalState,
                  patient
                )}
              >
                Borrar Paciente
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

RenderPatients.onGetPatient = (updateGlobalState, patient) => e => {
  e.preventDefault();
  updateGlobalState({ currentPatient: patient });
  localStorage.removeItem("currentPatient");
  localStorage.setItem("currentPatient", JSON.stringify(patient, null, 2));
};

RenderPatients.onRemovePatient = (updateGlobalState, patient) => e => {
  e.preventDefault();
  const localPatient = JSON.parse(localStorage.getItem("currentPatient"));
  (async () => {
    try {
      await axios.delete(`${apiURL}/patients/${patient._id}`, {
        headers: { "x-auth": localStorage.getItem("token") }
      });
      if (localPatient._id === patient._id) {
        updateGlobalState({ currentPatient: null });
        localStorage.removeItem("currentPatient");
      }
      const user = await axios.get(
        `https://tdah-rest-api.herokuapp.com/api/advisor/me`,
        {
          headers: { "x-auth": localStorage.getItem("token") }
        }
      );
      updateGlobalState({ user });
    } catch (err) {
      throw new Error(err);
    }
  })();
};

export default RenderPatients;
