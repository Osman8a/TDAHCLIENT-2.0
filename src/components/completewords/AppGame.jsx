import React, { Component } from "react";
import swal from 'sweetalert2'
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
          "herramienta compuesta por unas cerdas unidas a un mango, que se utiliza para pintar.",
        word: "brocha",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1511545928/brocha_srltrn.jpg"
      },
      {
        definition:
          "extremidad superior -o anterior",
        word: "brazo",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1511546398/brazo_g3mzm7.jpg"
      },
      {
        definition:
          "Una mujer con capacidad de volar montada en una escoba",
        word: "bruja",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1511546397/bruja_ct4pyg.jpg"
      }
    ]
  };
  onCompared = (value, wordA) => {
    const word = wordA.toLowerCase().replace("_", "value");
    console.log(`aquiii ${word}`);
    console.log(`Hola Mundo, ${value}`);
    if (word === this.state.words[this.state.i].word) {
      swal(
        'Felicidades!',
        `Aprobaste es ${word}!`,
        'success'
      )
      this.setState({
        i: this.state.i + 1,
        complete: true
      });
    } else {
      swal(
        'Fallaste!',
        `intentalo nuevamente`,
        'success'
      )
      this.setState({
        try: this.state.try + 1
      });
    }
    if (this.state.words.length - 1 === this.state.i) {
      swal(
        'Felicidades!',
        'Prueba Culminada!',
        'success'
      )
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
