import React from 'react';

export default props =>
  <div>
      <div className="main container full-width center-text">
      the price
      </div>
      <div className="main container full-width center-text">
        <input type="text" placeholder={ props.pair.last } />
        <div>{ props.pair.last }</div>
      </div>
  </div>
