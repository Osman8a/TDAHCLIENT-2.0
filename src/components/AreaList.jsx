// @flow
import React from "react";
// import uuid from "uuid";
import Area from "./Area";

const AreaList = () => {
  if (!localStorage.getItem("currentPatient")) {
    return <div>Select a Patient First</div>;
  }

  const areas = [
    {
      id: 1,
      name: "Cognitiva",
      figure:
        "http://res.cloudinary.com/osman8a/image/upload/v1506663333/cognitive_jipibx.png",
      type: "cognitive"
    },
    {
      id: 2,
      name: "Escolar",
      figure:
        "http://res.cloudinary.com/osman8a/image/upload/c_scale,h_802,w_720/v1506663333/school_ek7oyb.jpg",
      type: "escolar"
    }
  ];

  return (
    <div>
      {areas.map(msg => (
        <Area
          key={msg.id}
          name={msg.name}
          figure={msg.figure}
          type={msg.type}
          // onOpenGame={() => onOpenGame(msg.type)}
        />
      ))}
    </div>
  );
};

export default AreaList;
