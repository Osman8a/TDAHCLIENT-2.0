import React, { Component } from "react";
import Letter from "./Letter";

class Board extends Component {
  state = {};
  render() {
    const cartas = [1, 2, 3, 4, 5, 6];
    return <div className="board">{cartas.map((carta) => <Letter />)}</div>;
  }
}

export default Board;
