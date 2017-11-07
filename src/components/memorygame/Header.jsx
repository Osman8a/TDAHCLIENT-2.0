import React from "react";

type Props = {
  try: number,
  reset: fun
};

const Header = (props: Props) => {
  return (
    <header className="header">
      <div className="title"> MemoryGame</div>
      <div>
        <button className="reset_button" onClick={props.reset}>
          Reiniciar
        </button>
      </div>
      <div className="title">Intentos: {props.try}</div>
    </header>
  );
};

export default Header;
