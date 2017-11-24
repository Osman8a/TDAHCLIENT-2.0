import React, { Component } from "react";
import swal from 'sweetalert2'
import Game from "./Game";
import Header from "./Header";

class AppGame extends Component {
  state = {
    try: 0,
    i: 0,
    value: null,
    words: [
      {
        vocal: ['r','c','p','t'],
        word: "opa",
        correct: "copa",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1506968633/Boat_h14hag.jpg"
      },
      {
        vocal: ['m','c','t','ll'],
        word: "apa",
        correct: "mapa",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1506968633/Boat_h14hag.jpg"
      },
      {
        vocal: ['b','p','m','l'],
        word: "esa",
        correct: "mesa",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1506968633/Boat_h14hag.jpg"
      },
      {
        vocal: ['p','b','m','r'],
        word: "ata",
        correct: "bata",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1506968633/Boat_h14hag.jpg"
      },
      {
        vocal: ['r','m','c','t'],
        word: "aza",
        correct: "taza",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1506968633/Boat_h14hag.jpg"
      },
      {
        vocal: ['l','r','s','c'],
        word: "ima",
        correct: "lima",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1506968633/Boat_h14hag.jpg"
      },
      {
        vocal: ['l','m','r','g'],
        word: "ota",
        correct: "gota",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1506968633/Boat_h14hag.jpg"
      },
      {
        vocal: ['l','c','t','p'],
        word: "una",
        correct: "luna",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1506968633/Boat_h14hag.jpg"
      },
      {
        vocal: ['n','ll','l','c'],
        word: "ave",
        correct: "nave",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1506968633/Boat_h14hag.jpg"
      },
      {
        vocal: ['s','v','c','r'],
        word: "ara",
        correct: "cara",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1506968633/Boat_h14hag.jpg"
      },
      {
        vocal: ['l','c','s','b'],
        word: "ola",
        correct: "cola",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1506968633/Boat_h14hag.jpg"
      },
      {
        vocal: ['f','r','t','i'],
        word: "oca",
        correct: "foca",
        img:
          "http://res.cloudinary.com/osman8a/image/upload/v1506968633/Boat_h14hag.jpg"
      }
      
    ]
  };

  handleChange = e => {
    this.setState({value: e.target.value});
  }

  onCompared = e => {
    e.preventDefault();
    const selectWord = this.state.value
    const currentWord = this.state.words[this.state.i].word.toLowerCase();
    const correct = this.state.words[this.state.i].correct.toLowerCase();
    const combinada = selectWord.concat(currentWord)

    console.log(selectWord.concat(currentWord))
    console.log(currentWord)

    if (selectWord.concat(currentWord) === correct) {
      swal(
        'Felicidades!',
        `Aprobaste ${correct}`,
        'success'
      )
      this.setState({
        i: this.state.i + 1
      });
    } else {
      swal(
        'Fallaste!',
        `${selectWord.concat(currentWord)} no es igual a ${correct}`,
        'error'
      )
      this.setState({
        try: this.state.try + 1
      });
    }
    if (this.state.words.length - 1 === this.state.i) {
      swal(
        'Felicidades!',
        `Prueba Culminada`,
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
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default AppGame;
