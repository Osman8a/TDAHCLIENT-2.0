import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <memoryheader>
        <div className="title"> MemoryGame</div>
        <div>
          <button className="reset_button">Reiniciar</button>
        </div>
        <div className="title">Intentos:</div>
      </memoryheader>
    );
  }
}

export default Header;
