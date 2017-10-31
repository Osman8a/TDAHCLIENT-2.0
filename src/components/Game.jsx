// @flow
import React from "react";

type Props = {
  name: String,
  figure: String
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
      {/* <button onClick={onOpenSpecificGame} className={"button_area"}>
    Seleccionar
  </button> */}
    </div>
  </div>
);

export default Game;
