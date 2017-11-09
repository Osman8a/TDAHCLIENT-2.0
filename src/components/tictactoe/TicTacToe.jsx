import React, { Component } from "react";
import Announcement from "./Announcement";
import ResetButton from "./ResetButton";
import Tile from "./Tile";

class TicTacToe extends Component {
  constructor() {
    super();
    this.state = {
      gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "]
    };
  }
  render() {
    return (
      <div className="container">
        <div className="menu">
          <h1>Tic-Tac-Toe</h1>
          <Announcement />
          <ResetButton />
        </div>
        {this.state.gameBoard.map((value, i) => {
          <Tile />;
        })}
      </div>
    );
  }
}

export default TicTacToe;
