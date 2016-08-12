import React from 'react';
import numeral from 'numeral';

export default props =>
  <div>
      <div className="main container full-width center-text">
      the price
      </div>
      <div className="container full-width center-text">
        <input type="text" onChange={ props.selectPrice } placeholder="Enter a price" value={ props.price }/>
        <div className={ props.pair ? props.pair.status : ""} style={{"cursor": "pointer"}} onClick={ () =>
          props.selectPriceClick(numeral(
            props.pair
              ? props.pair.last
              : 0)
              .format('0.[00000000]')) }>
        Last trade was { numeral(
            props.pair
              ? props.pair.last
              : 0)
              .format('0.[00000000]') }
        </div>
      </div>
  </div>
