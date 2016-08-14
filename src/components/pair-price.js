import React from 'react';
import numeral from 'numeral';

export default props =>
  <div>
      <div className="main container full-width center-text">
      the price
      </div>
      <div className="container full-width center-text">
        <input type="text" onChange={ props.selectPrice } placeholder="Enter a price" value={ props.price }/>
        <div style={{"cursor": "pointer"}} onClick={ () =>
          props.selectPriceClick(numeral(
            props.pair
              ? props.pair.last
              : 0)
              .format('0.[00000000]')) }>
        Last trade was <span className={ props.pair ? props.pair.status : ""}>{ numeral(
            props.pair
              ? props.pair.last
              : 0)
              .format((parseInt(props.pair && props.pair.last, 10) >= 1) ? '0.[00000000]' : '0.00000000') }</span>
        </div>
      </div>
  </div>
