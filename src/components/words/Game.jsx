import React from "react";
import InputGame from "./InputGame";
import ButtonGame from "./ButtonGame";

type Props = {
  word: Object,
  onCompared: func,
  vocal: String,
  handleChange: func
};

const Game = (props: Props) => {
  return (
    <form onSubmit={props.onCompared}>
      <div className="row">
        <div className="col-md-4">
          <h3 className="title">
            Forma familias de palabras y selecciona la correcta
          </h3>
          <div className="well well-lg">
            <div className="card width: 20rem">
              <div className="card-block">
              <select onChange={props.handleChange}>
                  <option value={props.word.vocal[0]}>{props.word.vocal[0]}</option>
                  <option value={props.word.vocal[1]}>{props.word.vocal[1]}</option>
                  <option value={props.word.vocal[2]}>{props.word.vocal[2]}</option>
                  <option value={props.word.vocal[3]}>{props.word.vocal[3]}</option>
                </select>
                  <p className="text_letter">{props.word.word}</p>
                <ButtonGame />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Game;
