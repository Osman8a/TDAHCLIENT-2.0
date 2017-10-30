import React from "react";

const Props = {
  name: String,
  figure: String
};

const Game = ({ name, figure }: Props) => {
  return (
    <div className="col-md-6">
      <div className="well well-lg">
        <h4 className="fa fa-braille titulo">{name}</h4>
        <img className="img-circle img_css" src={figure} alt="Cognitiva" />
        {/* <button onClick={onOpenSpecificGame} className={"button_area"}>
          Seleccionar
        </button> */}
      </div>
    </div>
  );
};

export default Game;
