import React from "react";
import GameList from "./GameList";

type Props = {
  name: String,
  figure: String
};

const Area = ({ name, figure }: Props) => {
  const onOpenGame = () => <GameList />;

  return (
    <div className="row justify-content-center">
      <div className="col-4">
        <div className="well well-lg">
          <h4 className="fa fa-braille titulo">{name}</h4>
          <img className="img-circle img_css" src={figure} alt={name} />
          <button onClick={onOpenGame} className="button_area">
            <span
              className={
                Object.is(name, "Escolar")
                  ? "fa fa-graduation-cap"
                  : "fa fa-braille"
              }
            />{" "}
            Seleccionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Area;
