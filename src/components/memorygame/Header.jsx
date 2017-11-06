import React  from "react";

const Header = () => {
    return (
      <header className="header">
        <div className="title"> MemoryGame</div>
        <div>
          <button className="reset_button">Reiniciar</button>
        </div>
        <div className="title">Intentos:</div>
      </header>
    );
}

export default Header;
