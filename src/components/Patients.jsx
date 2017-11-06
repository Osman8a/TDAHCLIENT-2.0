// @flow
import React, { Component } from "react";
import DatePicker from "react-date-picker";
import axios from "axios";
import { apiURL, regex } from "./../constants";
import PatientInput from "./PatientInput";

type Props = {
  updateGlobalState: Function
};

class Patients extends Component<Props> {
  state = {
    date: new Date()
  };

  onChange = date => this.setState({ date });

  handleGetpatients = e => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const { name: { value: name }, lastname: { value: lastname } } = e.target;
    const { name: reName } = regex;

    if (!reName.test(name)) {
      console.log("Nombre Invalido");
      return;
    }

    if (!reName.test(lastname)) {
      console.log("Nombre Invalido");
      return;
    }

    (async () => {
      try {
        await axios.post(
          `${apiURL}/patients`,
          {
            name,
            lastname,
            age: this.state.date.getTime()
          },
          {
            headers: { "x-auth": token }
          }
        );

        // update Global State
        const user = await axios.get(
          `https://tdah-rest-api.herokuapp.com/api/advisor/me`,
          {
            headers: { "x-auth": token }
          }
        );

        this.props.updateGlobalState({
          user
        });
      } catch (err) {
        throw new Error(err);
      }
    })();
  };

  render() {
    return (
      <div className="add-patient">
        <form className="col-12" onSubmit={this.handleGetpatients}>
          <PatientInput placeHolder="Nombres" name="name" id="inputName" />
          <PatientInput
            placeHolder="apellidos"
            name="lastname"
            id="inputLastname"
          />
          <DatePicker onChange={this.onChange} value={this.state.date} />
          <button type="submit" className="btn btn-success btn-sm">
            Success
          </button>
        </form>
      </div>
    );
  }
}

export default Patients;
