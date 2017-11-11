import React from "react";
import InputGame from "./InputGame";
import ButtonGame from "./ButtonGame";

type Props = {
  word: Object,
  onCompared: func
};

const Game = (props: Props) => {
  return (
    <form onSubmit={props.onCompared}>
      <div className="row">
        <div className="col-md-4">
          <h3 className="title">Observa, lee y escribe la palabra correcta</h3>
          <div className="well well-lg">
            <div className="card width: 20rem">
              <img
                className="img_letter"
                src={props.word.img}
                alt="Card image cap"
              />
              <div className="card-block">
                <p className="text_letter">{props.word.fail}</p>
                <InputGame />
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
