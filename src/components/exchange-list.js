import React, { Component } from 'react';

class ExchangeList extends Component {
    shouldComponentUpdate(nextProps){
      const answer = this.props.exchangeList.length !== nextProps.exchangeList.length;
      return answer;
    }

    render() {
    return <div>
            <div className="main container full-width center-text">
            when
            </div>
            <div className="container full-width center-text">
                <select onChange={ this.props.selectExchange }>
                    { this.props.exchangeList.map((value) => <option
                        key={value.key}
                        value={value.key}>{value.name}</option>)}
                    {this.props.exchangeList.length > 0 ? null : <option>Loading exchanges...</option> }
                </select>
            </div>
        </div>
    }
}

export default ExchangeList;
