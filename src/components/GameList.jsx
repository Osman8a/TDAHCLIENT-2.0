// @flow
import React from "react";
import { Redirect } from "react-router-dom";
import uuid from "uuid";
import Game from "./Game";

type Props = {
  match: {
    params: {
      gameType: String
    }
  }
};

const GameList = (props: Props) => {
  if (!localStorage.getItem("currentPatient")) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div>
      {GameList.detectGameType(props.match.params.gameType).map(msg => (
        <Game
          key={msg.id}
          name={msg.name}
          figure={msg.figure}
          type={msg.type}
          code={msg.code}
          {...props}
        />
      ))}
    </div>
  );
};

GameList.detectGameType = gameType => {
  const games = [
    {
      id: uuid.v4(),
      name: "Memoria",
      figure:
        "http://res.cloudinary.com/osman8a/image/upload/v1511530686/memoria_bwmwgd.svg",
      type: "cognitive",
      code: 0
    },
    {
      id: uuid.v4(),
      name: "Tic Tac Toe ",
      figure:
        "http://res.cloudinary.com/osman8a/image/upload/c_scale,h_802,w_720/v1511529970/tic_tac_toe_gurcqa.png",
      type: "cognitive",
      code: 1
    },
    {
      id: uuid.v4(),
      name: "Palabra Correcta",
      figure:
        "http://res.cloudinary.com/osman8a/image/upload/v1511531393/letras1_moqtgm.svg",
      type: "cognitive",
      code: 2
    },
    {
      id: uuid.v4(),
      name: "Selecciona la letra correcta",
      figure:
        "http://res.cloudinary.com/osman8a/image/upload/v1511532703/letra_correcta_kcuzo7.jpg",
      type: "escolar",
      code: 3
    },
    {
      id: uuid.v4(),
      name: "Crea la palabra correcta",
      figure:
        "http://res.cloudinary.com/osman8a/image/upload/v1511532421/palabra_correcta_gvp99e.jpg",
      type: "escolar",
      code: 4
    },
    {
      id: uuid.v4(),
      name: "Forma Palabras",
      figure:
        "http://res.cloudinary.com/osman8a/image/upload/v1511531998/letras5_sb4gxp.svg",
      type: "escolar",
      code: 5
    }


  ];

  return games.map(game => game).filter(game => game.type === gameType);
};

export default GameList;
