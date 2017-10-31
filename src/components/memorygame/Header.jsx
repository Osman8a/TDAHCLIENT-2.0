import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="titulo"> MemoryGame</div>
        <div>
          <button className="boton-reiniciar" />
        </div>
        <div className="titulo">Intentos:</div>
      </header>
    );
  }
}

export default Header;
