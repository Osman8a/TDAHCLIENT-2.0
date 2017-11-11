import React from "react";

type Props = {
  onCompared: func
};

const Button = (props: Props) => {
  return (
    <button type="submit" className={"button_Game"}>
      Comparar
    </button>
  );
};

export default Button;
