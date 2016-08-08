import React from 'react';
import logo from '../moon.png';

export default props =>
      <div id="header" className="full-width center-text">
        <span className="logo">
          <a className="home-link" href="/">
            AlertC<img alt="o" title="To the moon!" className="moon-logo" src={logo} />.in
          </a>
        </span>
      </div>
