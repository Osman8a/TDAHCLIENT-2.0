import React, { Component } from "react";
import swal from 'sweetalert2'
import Game from "./Game";
import Header from "./Header";

class AppGame extends Component {
  state = {
    try: 0,
    i: 0,
    words: [
      {
        fail: "braco",
        word: "barco",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1506968633/Boat_h14hag.jpg"
      },
      {
        fail: "borcha",
        word: "brocha",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1511545928/brocha_srltrn.jpg"
      },
      {
        fail: "barzo",
        word: "brazo",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1511546398/brazo_g3mzm7.jpg"
      },
      {
        fail: "burja",
        word: "bruja",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1511546397/bruja_ct4pyg.jpg"
      }
    ]
  };
  onCompared = e => {
    e.preventDefault();
    const inputWord = e.target.wordGame.value.toLowerCase();
    const currentWord = this.state.words[this.state.i].word.toLowerCase();
    const input = document.getElementById("wordGame");

    if (inputWord === currentWord) {
      swal(
        'Felicidades!',
        `Aprobaste es ${inputWord}!`,
        'success'
      )
      this.setState({
        i: this.state.i + 1
      });
      input.value = "";
    } else {
      swal(
        'Fallaste!',
        `${inputWord} no es igual a ${currentWord}`,
        'error'
      )
      this.setState({
        try: this.state.try + 1
      });
      input.value = "";
    }
    if (this.state.words.length - 1 === this.state.i) {
      swal(
        'Felicidades, Excelente!',
        `Prueba Culminada!`,
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
        />
      </div>
    );
  }
}

export default AppGame;
