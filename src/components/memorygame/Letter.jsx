import React, { Component } from "react";
import FlipCard from "./lib/main";

type Props = {
  icon: Object,
  selectLetter: func,
  compared: Array,
  wasguessed: Boolean,
  type: string
};

class Letter extends Component<Props> {
  render() {
    return (
      <div className="carta" onClick={this.props.selectLetter}>
        <FlipCard
          type="vertical"
          flipped={this.props.compared || this.props.wasguessed}
          disabled
        >
          <div className="portada" />
          <div className="contenido">
            <i className={`fa ${this.props.icono} fa-5x`} />
          </div>
        </FlipCard>
      </div>
    );
  }
}

export default Letter;
