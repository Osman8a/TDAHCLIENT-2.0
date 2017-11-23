import React from "react";

type Props = {
  try: number
};

const Header = (props: Props) => {
  return (
    <header className="header">
      <div className="title"> Letra Correcta</div>
      <div className="trys">Intentos: {props.try}</div>
    </header>
  );
};

export default Header;
