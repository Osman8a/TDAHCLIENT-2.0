import React, { Component } from "react";
import DatePicker from "react-date-picker";
import InputName from "./InputName";

class Patients extends Component {
  constructor() {
    super();

    this.state = {
      date: null
    };
  }

  onChange = date => this.setState({ date });

  render() {
    return (
      <div>
        <form className="form-inline">
          <div className="form-group">
            <InputName />
            <label htmlFor="inputName">
              <input
                type="password"
                id="inputName"
                className="form-control mx-sm-3"
                aria-describedby="passwordHelpInline"
                placeholder="Nombres"
              />
              <span className="sr-only">Apellidos</span>
            </label>
            <label htmlFor="inputName">
              <input
                type="password"
                id="inputName"
                className="form-control mx-sm-3"
                aria-describedby="passwordHelpInline"
                placeholder="Age"
              />
              <span className="sr-only">Age</span>
            </label>
            <DatePicker onChange={this.onChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default Patients;
