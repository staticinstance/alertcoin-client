import React, { Component } from 'react';

class PairList extends Component {
    shouldComponentUpdate(nextProps){
      const answer = this.props.pairs.length !== nextProps.pairs.length;
      return answer;
    }

    render() {
      return <div>
        <div className="main container full-width center-text">
          has
        </div>
        <div className="container full-width center-text">
        <select onChange={ this.props.selectPair }>
        { this.props.pairs.map((value) =>
          <option
            key={value.key}
            value={value.key}>
            {value.name}</option>)}
        {this.props.pairs.length > 0 ? null : <option>Loading pairs...</option> }
        </select>
        </div>
      </div>
  }
}

export default PairList;
