import React, { Component } from "react";
import { Redirect } from "react-router-dom";

type Props = {
  name: String,
  figure: String,
  code: Number
};

class Game extends Component<Props> {
  state = {
    value: null
  };

  showGame = () => {
    switch (this.state.value) {
      case 0:
        return <Redirect to="/memorygame" />;
        break;
      case 1:
        return <Redirect to="/tictactoe" />;
        break;
      case 2:
        return <Redirect to="/wordsgame" />;
        break;
      case 3:
        return <Redirect to="/words" />;
        break;
      case 4:
        return <Redirect to="/completewords" />;
        break;
      case 5:
        return <Redirect to="/analysiswords" />;
        break;
      //    default:
      //     break;
    }
  };
  updateValue = state => this.setState(state);
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
            onClick={() =>
              onOpenSpecificGame(this.props.code, this.updateValue)}
            className={"button_area"}
          >
            Seleccionar
          </button>
          {this.showGame()}
        </div>
      </div>
    );
  }
}

const onOpenSpecificGame = (code, updateValue) => {
  updateValue({
    value: code
  });
  console.log(code);
};

export default Game;
