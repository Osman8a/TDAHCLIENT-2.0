// @flow
import React from "react";
import { Redirect } from "react-router-dom";

var { Route } = Router;

type Props = {
  name: String,
  figure: String,
  code: Number
};

const onOpenSpecificGame = code => {
  console.log(code);
  if (code === 1) {
    <Redirect to="/memorygame" />;
    // this.props.history.push("/memorygame");
  } else {
    console.log(`no es igual a 1`);
  }
};
const Game = (props: Props) => (
  <div className="col-md-6">
    <div className="well well-lg">
      <h4 className="fa fa-braille titulo">{props.name}</h4>
      <img
        className="img-circle img_css"
        src={props.figure}
        alt={`Juego ${props.name}`}
      />
      <button
        onClick={() => onOpenSpecificGame(props.code)}
        className={"button_area"}
      >
        Seleccionar
      </button>
    </div>
  </div>
);

export default Game;
