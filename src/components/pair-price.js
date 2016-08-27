import React, { Component } from 'react';
import numeral from 'numeral';

class PairPrice extends Component {
    shouldComponentUpdate(nextProps){
      return this.props && this.props.pair && (this.props.price !== nextProps.price || this.props.pair.key !== nextProps.pair.key || this.props.pair.status !== nextProps.pair.status);
    }

    render() {
      return <div>
        <div className="main container full-width center-text">
        the price
        </div>
        <div className="container full-width center-text">
          <input type="text" onChange={ this.props.selectPrice } placeholder="Enter a price" value={ this.props.price }/>
          <div style={{"visibility": this.props && this.props.pair && this.props.pair.last !== 0 ? "visible" : "hidden"}}>
            <span
              title="Select price"
              style={{"cursor": "pointer"}}
              onClick={ () =>
              this.props.selectPriceClick(numeral(
                this.props.pair
                  ? this.props.pair.last
                  : 0)
                  .format('0.00[000000]')) }>
                  Last trade was <span
                  className={ this.props.pair && this.props.pair.status ? this.props.pair.status : ""}
                  title={ "Last trade: " + (this.props.pair && this.props.pair.delta ? this.props.pair.delta : "") }>
                    { numeral(
                this.props.pair
                  ? this.props.pair.last
                  : 0)
                .format((parseInt(this.props.pair && this.props.pair.last, 10) >= 1) ? '0.00[000000]' : '0.00000000')}
              </span>
            </span>
          </div>
        </div>
    </div>
  }
}

export default PairPrice;
