// @flow
import React from "react";
import { Link } from "react-router-dom";
// import GameList from "./GameList";

type Props = {
  name: String,
  figure: String,
  type: String
};

const Area = ({ name, figure, type }: Props) => {
  if (!localStorage.getItem("currentPatient")) {
    return <div>Select a Patient First</div>;
  }
  return (
    <div className="col-12 col-md-6 justify-content-center">
      <h4 className="fa fa-braille titulo">{name}</h4>
      <img className="img-circle img_css" src={figure} alt={name} />
      <Link to={`/selectarea/${type}`} className="btn button_area">
        <span
          className={
            Object.is(type, "escolar")
              ? "fa fa-graduation-cap"
              : "fa fa-braille"
          }
        />{" "}
        Seleccionar
      </Link>
    </div>
  );
};

export default Area;
