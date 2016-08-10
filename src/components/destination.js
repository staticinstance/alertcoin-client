import React from 'react';

export default props =>
  <div>
    <div className="main container full-width center-text">
      Send an alert to
    </div>
    <div className="main container full-width center-text">
        <input type="text" onChange={ props.selectDestination } placeholder="@twittername or phone number" value={ props.destination }/>
    </div>
  </div>
