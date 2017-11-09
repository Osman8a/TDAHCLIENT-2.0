import React, { Component } from "react";
import Announcement from "./Announcement";
import ResetButton from "./ResetButton";
import Tile from "./Tile";

class TicTacToe extends Component {
  constructor() {
    super();
    this.state = {
      gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      turn: "p",
      winner: null
    };
  }

  resetBoard() {
    this.setState({
      gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      winner: null,
      turn: "p"
    });
  }

  updateBoard(loc, player) {
    // Game Over!
    console.log(this.state.winner, this.state.turn, this.state.gameBoard);
    if (this.state.winner !== null) {
      // make game over component visible
      console.log("Winner", this.state.winner);
      return;
    }
    if (
      this.state.gameBoard[loc] === "p" ||
      this.state.gameBoard[loc] === "q"
    ) {
      // invalid move
      return;
    }
    const currentGameBoard = this.state.gameBoard;
    currentGameBoard.splice(loc, 1, this.state.turn);
    this.setState(
      { gameBoard: currentGameBoard },
      function() {
        // Check if there is a winner or draw
        const moves = this.state.gameBoard.join("").replace(/ /g, "");
        console.log("Moves:", moves, "Winner:", this.state.winner);
        if (moves.length === 9) {
          this.setState({ winner: "d" });
          // Make game over component visible
        } else {
          const topRow =
            this.state.gameBoard[0] +
            this.state.gameBoard[1] +
            this.state.gameBoard[2];
          if (topRow.match(/ppp|qqq/)) {
            this.setState({ winner: this.state.turn });
            return;
          }
          const middleRow =
            this.state.gameBoard[3] +
            this.state.gameBoard[4] +
            this.state.gameBoard[5];
          if (middleRow.match(/ppp|qqq/)) {
            this.setState({ winner: this.state.turn });
            return;
          }
          const bottomRow =
            this.state.gameBoard[6] +
            this.state.gameBoard[7] +
            this.state.gameBoard[8];
          if (bottomRow.match(/ppp|qqq/)) {
            this.setState({ winner: this.state.turn });
            return;
          }
          const leftCol =
            this.state.gameBoard[0] +
            this.state.gameBoard[3] +
            this.state.gameBoard[6];
          if (leftCol.match(/ppp|qqq/)) {
            this.setState({ winner: this.state.turn });
            return;
          }
          const middleCol =
            this.state.gameBoard[1] +
            this.state.gameBoard[4] +
            this.state.gameBoard[7];
          if (middleCol.match(/ppp|qqq/)) {
            this.setState({ winner: this.state.turn });
            return;
          }
          const rightCol =
            this.state.gameBoard[2] +
            this.state.gameBoard[5] +
            this.state.gameBoard[8];
          if (rightCol.match(/ppp|qqq/)) {
            this.setState({ winner: this.state.turn });
            return;
          }
          const leftDiag =
            this.state.gameBoard[0] +
            this.state.gameBoard[4] +
            this.state.gameBoard[8];
          if (leftDiag.match(/ppp|qqq/)) {
            this.setState({ winner: this.state.turn });
            return;
          }
          const rightDiag =
            this.state.gameBoard[2] +
            this.state.gameBoard[4] +
            this.state.gameBoard[6];
          if (rightDiag.match(/ppp|qqq/)) {
            this.setState({ winner: this.state.turn });
            return;
          }
          this.setState({ turn: this.state.turn === "p" ? "q" : "p" });
        }
      },
      this
    );
  }

  render() {
    return (
      <div className="game">
        <div className="menu">
          <h1 className="pink">Tic Tac Toe</h1>
          <Announcement winner={this.state.winner} />
          <ResetButton reset={this.resetBoard.bind(this)} />

          {this.state.gameBoard.map((value, i) => (
            <Tile
              key={i}
              loc={i}
              value={value}
              updateBoard={this.updateBoard.bind(this)}
              turn={this.state.turn}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TicTacToe;
