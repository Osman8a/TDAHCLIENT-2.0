import React, { Component } from "react";
import uuid from "uuid";
import Game from "./Game";

class GameList extends Component<Props> {
  state = {
    games: [
      {
        id: uuid.v4(),
        name: "Directionality",
        figure:
          "http://res.cloudinary.com/osman8a/image/upload/c_scale,h_802,w_720/v1506839015/arrows_zrwzk2.jpg",
        type: true
      },
      {
        id: uuid.v4(),
        name: "Directionality of hands",
        figure:
          "http://res.cloudinary.com/osman8a/image/upload/c_scale,h_802,w_720/v1506839015/hands_hbezeb.jpg",
        type: false
      }
    ]
  };

  render() {
    return (
      <div>
        {console.log(
          this.state.games.map(msg => {
            console.log(`en los juegos: ${msg.type}`);
            return (
              <Game
                key={msg.id}
                name={msg.name}
                figure={msg.figure}
                type={msg.type}
                // onOpenSpecificGame={() => onOpenSpecificGame(msg.id)}
              />
            );
          })
        )}
        {/* .filter(alreadyGames => {
            return alreadyGames.props.type === typegame;
          })} */}
      </div>
    );
  }
}

export default GameList;
