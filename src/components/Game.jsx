import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

type Props = {
  name: String,
  figure: String,
  code: Number
};

const onOpenSpecificGame = code => {
  console.log(code);
  if (code === 1) {
    this
  } else {
    console.log(`no es igual a 1`);
  }
};

class Game extends Component<Props> {
  state = {  
    value: null,
  }

  render() {
    return (
      <div className="col-md-6">
      <div className="well well-lg">
        <h4 className="fa fa-braille titulo">{this.props.name}</h4>
        <img
          className="img-circle img_css"
          src={this.props.figure}
          alt={`Juego ${this.props.name}`}
        />
        <button
          onClick={() => onOpenSpecificGame(this.props.code, this.updateValue)}
          className={"button_area"}
          >
          Seleccionar
          </button>
      </div>
    </div>
    );
  }
}

export default Game;
