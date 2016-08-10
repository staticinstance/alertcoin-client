import React from 'react';

export default props =>
  <div>
    <div className="main container full-width center-text">
      for sale
    </div>
    <div className="main container full-width center-text">
      <select onChange={ props.selectDirection }>
        <option key=">=" value=">=" >Greater than or equal to</option>
        <option key="<=" value="<=">Less than or equal to</option>
      </select>
    </div>
  </div>
