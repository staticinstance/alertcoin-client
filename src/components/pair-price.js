import React from 'react';

export default props =>
  <div>
      <div className="main container full-width center-text">
      the price
      </div>
      <div className="main container full-width center-text">
        <input type="text" onChange={ props.selectPrice } placeholder={ "Last trade was " + props.pair.last } value={ props.selectedPrice }/>
        <div onClick={ () => props.selectPriceClick(props.pair.last) }>{ props.pair.last }</div>
      </div>
  </div>
