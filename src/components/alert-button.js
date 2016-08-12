import React from 'react';
import { Button } from 'react-bootstrap'

export default props =>
  <div className="container full-width center-text">
    <Button bsStyle="primary" onClick={ props.addAlert }>Alert Me!</Button>
  </div>
