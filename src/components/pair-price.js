import React, { Component } from 'react';
import numeral from 'numeral';

class PairPrice extends Component {
    shouldComponentUpdate(nextProps){
      const answer = this.props && this.props.pair && this.props.pair.status && this.props.pair.status !== nextProps.pair.status;
      return answer;
    }

    render() {
      console.log()
      return <div>
        <div className="main container full-width center-text">
        the price
        </div>
        <div className="container full-width center-text">
          <input type="text" onChange={ this.props.selectPrice } placeholder="Enter a price" value={ this.props.price }/>
          <div style={{"cursor": "pointer"}} onClick={ () =>
            this.props.selectPriceClick(numeral(
              this.props.pair
                ? this.props.pair.last
                : 0)
                .format('0.[00000000]')) }>
          Last trade was <span className={ this.props.pair && this.props.pair.status ? this.props.pair.status : ""}>{ numeral(
              this.props.pair
                ? this.props.pair.last
                : 0)
                .format((parseInt(this.props.pair && this.props.pair.last, 10) >= 1) ? '0.[00000000]' : '0.00000000') }</span>
          </div>
        </div>
    </div>
  }
}

export default PairPrice;
