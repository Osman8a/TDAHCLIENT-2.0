// @flow
import React, { Component } from "react";
import DatePicker from "react-date-picker";
import axios from "axios";
import { apiURL, regex } from "../constants";

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
          <label htmlFor="inputName">
            <input
              type="text"
              id="inputName"
              className="form-control"
              name="name"
              aria-describedby="passwordHelpInline"
              placeholder="Nombres"
            />
            <span className="sr-only">Nombre</span>
          </label>
          <label htmlFor="inputLastname">
            <input
              type="text"
              id="inputLastname"
              className="form-control"
              name="lastname"
              aria-describedby="passwordHelpInline"
              placeholder="apellidos"
            />
            <span className="sr-only">Apellido</span>
          </label>
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
