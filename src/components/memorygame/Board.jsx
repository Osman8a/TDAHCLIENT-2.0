import React from "react";
import Letter from "./Letter";

type Props = {
  letter: Object,
  SelectedCouple: Array,
  selectLetter: func
};

const Board = (props: Props) => (
  <div className="board">
    {props.letter.map((letter, index) => {
      const compared = props.SelectedCouple.indexOf(letter) > -1;

      return (
        <Letter
          key={index}
          icon={letter.icon}
          compared={compared} // esta siendo comparado
          selectLetter={() => props.selectLetter(letter)}
          wasguessed={letter.wasguessed} // fue adivinado
        />
      );
    })}
  </div>
);

export default Board;
