import React, { Component } from "react";
import FlipCard from "./lib/main";

type Props = {
  icon: Object,
  selectLetter: func,
  compared: Array,
  wasguessed: Boolean
};

class Letter extends Component<Props> {
  render() {
    return (
      <div className="letter" onClick={this.props.selectLetter}>
        <FlipCard
          flipped={this.props.compared || this.props.wasguessed}
          disabled={true}
        >
          <div className="front" />
          <div className="back">
            <i className={`fa ${this.props.icon} fa-5x`} />
          </div>
        </FlipCard>
      </div>
    );
  }
}

export default Letter;
