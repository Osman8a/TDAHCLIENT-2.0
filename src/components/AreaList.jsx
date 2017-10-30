import React, { Component } from "react";
import uuid from "uuid";
import Area from "./Area";

type Props = {
  currentPatient: Object,
  updateGlobalState: Function
};

class AreaList extends Component<Props> {
  state = {
    areas: [
      {
        id: uuid.v4(),
        name: "Cognitiva",
        figure:
          "http://res.cloudinary.com/osman8a/image/upload/v1506663333/cognitive_jipibx.png",
        type: true
      },
      {
        id: uuid.v4(),
        name: "Escolar",
        figure:
          "http://res.cloudinary.com/osman8a/image/upload/c_scale,h_802,w_720/v1506663333/school_ek7oyb.jpg",
        type: false
      }
    ]
  };
  render() {
    return (
      <div>
        {this.state.areas.map(msg => {
          return (
            <Area
              key={msg.id}
              name={msg.name}
              figure={msg.figure}
              type={msg.type}
              // onOpenGame={() => onOpenGame(msg.type)}
            />
          );
        })}
      </div>
    );
  }
}

export default AreaList;
