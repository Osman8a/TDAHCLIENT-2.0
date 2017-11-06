import React, { Component } from "react";
import Header from "./Header";
import Board from "./Board";
import BuildAnLetters from "./utils/BuildALetter";

const getInitialState = () => {
  const letter = BuildAnLetters();
  return {
    letter,
    SelectedCouple: [],
    IsCompared: false
  };
};

class MemoryGame extends Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  selectLetter(letter) {
    if (
      this.state.IsCompared ||
      this.state.SelectedCouple.indexOf(letter) > -1 ||
      letter.wasguessed
    ) {
      return;
    }

    const SelectedCouple = [...this.state.SelectedCouple, letter];
    this.setState({
      SelectedCouple
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Board
          letter={this.state.letter}
          SelectedCouple={this.state.SelectedCouple}
          selectLetter={letter => this.selectLetter(letter)}
        />
      </div>
    );
  }
}

export default MemoryGame;
