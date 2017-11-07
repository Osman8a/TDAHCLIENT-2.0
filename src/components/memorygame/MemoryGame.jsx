import React, { Component } from "react";
import Header from "./Header";
import Board from "./Board";
import BuildAnLetters from "./utils/BuildALetter";

const getInitialState = () => {
  const letter = BuildAnLetters();
  return {
    letter,
    SelectedCouple: [], // parejaseleccionada
    IsCompared: false // esta comparando
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
      letter.wasguessed // fue adivinada
    ) {
      return;
    }

    const SelectedCouple = [...this.state.SelectedCouple, letter];
    this.setState({
      SelectedCouple
    });

    if (SelectedCouple.length === 2) {
      this.compareCouple(SelectedCouple);
    }
  }

  compareCouple(SelectedCouple) {
    this.setState({ IsCompared: true });

    setTimeout(() => {
      const [firstLetter, secondLetter] = SelectedCouple;
      let letter = this.state.letter;

      if (firstLetter.icon === secondLetter.icon) {
        letter = letter.map(carta => {
          if (carta.icon !== firstLetter.icon) {
            return carta;
          }

          return { ...carta, wasguessed: true };
        });
      }

      this.setState({
        SelectedCouple: [],
        letter,
        IsCompared: false
      });
    }, 1000);
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
