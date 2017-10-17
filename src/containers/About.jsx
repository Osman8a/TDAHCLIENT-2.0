// @flow
import React, {Component} from 'react';

class Search extends Component {
  state = {
    searchTerm: '',
  };

  handleSearchTermChange = event => {
    this.setState ({
      searchTerm: event.target.value,
    });
  };

  render () {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleSearchTermChange}
          value={this.state.searchTerm}
          placeholder="Searh and try HOT MODULE REPLACEMENT"
        />
        <h2>{this.state.searchTerm}</h2>
      </div>
    );
  }
}

const About = () => (
  <div className="about">
    <h1 className="component-title">React Redux Webpack Boilerplate</h1>
    <p>This is a Full React app workflow </p>
    <p>Try hot module replacement in the next form input</p>
    <p>1) write something</p>
    <p>2) change something in your code</p>
    <p>3) Magic!</p>
    <Search />
  </div>
);

export default About;
