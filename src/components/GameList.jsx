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
      name: "Directionality",
      figure:
        "http://res.cloudinary.com/osman8a/image/upload/c_scale,h_802,w_720/v1506839015/arrows_zrwzk2.jpg",
      type: "cognitive"
    },
    {
      id: uuid.v4(),
      name: "Directionality of hands",
      figure:
        "http://res.cloudinary.com/osman8a/image/upload/c_scale,h_802,w_720/v1506839015/hands_hbezeb.jpg",
      type: "escolar"
    }
  ];

  return games.map(game => game).filter(game => game.type === gameType);
};

export default GameList;
