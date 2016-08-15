import React from 'react';

export default props =>
  <div style={{"paddingTop": "20px"}} className="container full-width center-text">
    <span style={{"cursor": "pointer"}}onClick={ props.logout }>Log out</span>
  </div>
