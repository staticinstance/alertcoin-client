import React from 'react';
import { Button } from 'react-bootstrap'

export default props =>
  <div style={{"paddingTop": "20px"}} className="container full-width center-text">
    <Button bsStyle="primary" onClick={ props.addAlert }>Alert Me!</Button>
  </div>
