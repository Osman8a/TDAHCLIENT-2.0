import React, { Component } from "react";
import swal from 'sweetalert2'
import SweetAlert from 'sweetalert-react';
import InputWordsB from "./InputWordsB";
import InputWordsD from "./InputWordsD";
import InputWordsP from "./InputWordsP";
import InputWordsQ from "./InputWordsQ";
import Header from "./Header";

type Props = {
  handleSignUp: Function
};

class WordsGame extends Component<Props> {
  state = {
    errorAlert: null,
    showbutton: true,
    showD: null,
    showP: null,
    showQ: null,
    try: 0
  };

  validateField = () => {
    switch (this.state.errorAlert) {
      case true:
        return (
          <div className="alert alert-danger app-auth__msg" role="alert">
            hubo un error
          </div>
        );
      case false:
        return (
          <div className="alert alert-success app-auth__msg" role="alert">
            Excelente ....... Sigamos al siguiente paso.
          </div>
        );
      default:
        return "";
    }
  };

  button = () => {
    if (this.state.showbutton) {
      return (
        <div>
          <button
            type="submit"
            className="button .col-md-4 .offset-md-4 btn btn-success btn-sm"
          >
            Submit
          </button>
        </div>
      );
    }
  };

  onRenderImputsWordsD = () => {
    if (this.state.showD) {
      return (
        <div>
          <div className="words">
            <h4>Introduce una palabra con la letra d</h4>
            <div className=".col-md-4">
              <InputWordsD />
            </div>
            {this.button()}
          </div>
        </div>
      );
    }
  };
  onRenderImputsWordsP = () => {
    if (this.state.showP) {
      return (
        <div>
          <div className="words">
            <h4>Introduce una palabra con la letra p</h4>
            <div className=".col-md-4">
              <InputWordsP />
            </div>
            {this.button()}
          </div>
        </div>
      );
    }
  };
  onRenderImputsWordsQ = () => {
    if (this.state.showQ) {
      return (
        <div>
          <div className="words">
            <h4>Introduce una palabra con la letra q</h4>
            <div className=".col-md-4">
              <InputWordsQ />
            </div>
            {this.button()}
          </div>
        </div>
      );
    }
  };
  updateStates = state => this.setState(state);

  render() {
    return (
      <div>
        <Header try={this.state.try} />
        <form
          className="form-inline"
          onSubmit={WordsGame.onSubmit(this.state.try, this.updateStates)}
        >
          <div className="row ">
            <div className="words">
              <h4>Introduce una palabra con la letra b</h4>
              <div className=".col-md-4">
                <InputWordsB />
              </div>
              {this.button()}
            </div>
          </div>
          {this.onRenderImputsWordsD()}
          {this.onRenderImputsWordsP()}
          {this.onRenderImputsWordsQ()}

          {this.validateField()}
        </form>
      </div>
    );
  }
}

WordsGame.onSubmit = (numTry, updateStates) => e => {
  e.preventDefault();
  console.log(`${numTry}`);
  const banderes = {
    D: false,
    P: false,
    Q: false
  };

  /**
   * Letra B
   * */
  const wordB = [
    { value: e.target.wordB.value.indexOf("b") },
    { value: e.target.wordB1.value.indexOf("b") },
    { value: e.target.wordB2.value.indexOf("b") }
  ];

  if (wordB[0].value != -1 && wordB[1].value != -1 && wordB[2].value != -1) {
    // alert(`Felicitaciones Aprobaste B`);
    swal(
      'Felicidades!',
      'Aprobaste B!',
      'success'
    )
    updateStates({
      showD: true
    });
    banderes.D = true;
  } else {
    swal(
      ':( ',
      'hay una letra incorrecta!',
      'error'
    )
    updateStates({
      try: numTry + 1
    });
  }

  /**
   * Letra D
   * */
  if (banderes.D === true) {
    const wordD = [
      { value: e.target.wordD.value.indexOf("d") },
      { value: e.target.wordD1.value.indexOf("d") },
      { value: e.target.wordD2.value.indexOf("d") }
    ];
    if (wordD[0].value != -1 && wordD[1].value != -1 && wordD[2].value != -1) {
      swal(
        'Felicidades!',
        'Aprobaste D!',
        'success'
      )
      updateStates({
        showP: true
      });
      banderes.P = true;
    } else {
      swal(
        ':( ',
        'hay una letra incorrecta!',
        'error'
      )
    }
  }

  /**
   * Letra P
   * */
  if (banderes.P === true) {
    const wordP = [
      { value: e.target.wordP.value.indexOf("p") },
      { value: e.target.wordP1.value.indexOf("p") },
      { value: e.target.wordP2.value.indexOf("p") }
    ];
    if (wordP[0].value != -1 && wordP[1].value != -1 && wordP[2].value != -1) {
      swal(
        'Felicidades!',
        'Aprobaste P!',
        'success'
      )
      updateStates({
        showQ: true
      });
      banderes.Q = true;
    } else {
      swal(
        ':( ',
        'hay una letra incorrecta!',
        'error'
      )
    }
  }

  /**
   * Letra Q
   * */
  if (banderes.Q === true) {
    const wordQ = [
      { value: e.target.wordQ.value.indexOf("q") },
      { value: e.target.wordQ1.value.indexOf("q") },
      { value: e.target.wordQ2.value.indexOf("q") }
    ];
    if (wordQ[0].value != -1 && wordQ[1].value != -1 && wordQ[2].value != -1) {
      swal(
        'Felicidades!',
        'Aprobaste Q!',
        'success'
      )
     
    } else {
      swal(
        ':( ',
        'hay una letra incorrecta!',
        'error'
      )
    }
  }
};

export default WordsGame;
