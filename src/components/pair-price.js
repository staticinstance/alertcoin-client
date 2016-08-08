import React from 'react';

export default props =>
  <div>
      <div className="main container full-width center-text">
      the price
      </div>
      <div className="main container full-width center-text">
        { props.pair.last }
      </div>
  </div>
