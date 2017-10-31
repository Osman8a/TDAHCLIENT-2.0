import React, { Component } from "react";
import Header from "./Header";
import Board from "./Board";

class MemoryGame extends Component {
  render() {
    return (
      <div>
        <Header />
        <Board />
      </div>
    );
  }
}

export default MemoryGame;
