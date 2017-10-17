import React from 'react';

const Features = () => (
  <div className="features">
    <h3>Interested in this boilerplate Features?</h3>
    <ul>
      <li>
        React, ReactDOM, Redux, React-Redux, React-Router, Redux-Thunk
      </li>
      <li>
        Hot Module Replacement
      </li>
      <li>
        Flow type
      </li>
      <li>
        PostCSS configured to be used from ie10 and some legacy browser fallbacks supported
      </li>
      <li>
        Images loader with images-webpack-loader which load and optimize your images
        {' '}
      </li>
      <li>Font loader supported</li>
      <li>Webpack dev server configured on port 3000</li>
      <li>also support for node server.js with express on port 3000 too</li>
      <li>Mocha, chai, sinon and enzyme for testing your app</li>
      <li>
        Extract-Text-Plugin so you could separate your style.css from the bundle.js
      </li>
      <li>ESlint, Prettier and Stylelint correctly configured</li>
      <li>Yarn is here with some scripts</li>
      <li>And of course git too!</li>
    </ul>
  </div>
);

export default Features;
