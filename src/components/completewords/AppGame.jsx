import React, { Component } from "react";
import Game from "./Game";
import Header from "./Header";

class AppGame extends Component {
  state = {
    try: 0,
    i: 0,
    complete: false,
    words: [
      {
        definition:
          "Embarcación con el fondo cóncavo y con cubierta, en especial la de gran o medio tonelaje.",
        word: "barco",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1506968633/Boat_h14hag.jpg"
      },
      {
        definition:
          "Embarcación con el fondo cóncavo y con cubierta, en especial la de gran o medio tonelaje.",
        word: "brocha",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1506968633/Boat_h14hag.jpg"
      },
      {
        definition:
          "Embarcación con el fondo cóncavo y con cubierta, en especial la de gran o medio tonelaje.",
        word: "brazo",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1506968633/Boat_h14hag.jpg"
      },
      {
        definition:
          "Embarcación con el fondo cóncavo y con cubierta, en especial la de gran o medio tonelaje.",
        word: "bruja",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1506968633/Boat_h14hag.jpg"
      }
    ]
  };
  onCompared = (value, wordA) => {
    const word = wordA.toLowerCase().replace("_", "value");
    console.log(`aquiii ${word}`);
    console.log(`Hola Mundo, ${value}`);
    if (word === this.state.words[this.state.i].word) {
      alert(`Felicidades es ${word}`);
      this.setState({
        i: this.state.i + 1,
        complete: true
      });
    } else {
      alert(`Fallaste, intentalo nuevamente`);
      this.setState({
        try: this.state.try + 1
      });
    }
    if (this.state.words.length - 1 === this.state.i) {
      alert(`Prueba Culminada`);
      this.setState({
        i: 0
      });
    }
  };

  render() {
    return (
      <div>
        <Header try={this.state.try} />
        <Game
          word={this.state.words[this.state.i]}
          onCompared={this.onCompared}
          complete={this.state.complete}
        />
      </div>
    );
  }
}

export default AppGame;
