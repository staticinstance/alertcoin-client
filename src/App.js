import React, { Component } from 'react';
import logo from './moon.png';
import './App.css';
import exchanges from './exchanges.json'

class App extends Component {
    render() {

      let exchangeKeys = Object.keys(exchanges);

      let selectedExchange = this.state && this.state.selectedExchange ? exchanges[this.state.selectedExchange] || exchanges[exchangeKeys[0]] : exchanges[exchangeKeys[0]];

      let selectedExchangePairs = Object.keys(selectedExchange.pairs).map((pair) => selectedExchange.pairs[pair]);

      let exchangesSelectOnSelect = (e) => this.setState({
        selectedExchange: e.target.value,
        selectedExchangePair: exchanges[e.target.value].pairs[Object.keys(exchanges[e.target.value].pairs)[0]].key
      })

      let pairsSelectOnSelect = (e) => this.setState({
        selectedExchangePair: e.target.value
      })

      let exchangesSelect = <select onChange={exchangesSelectOnSelect} className="full-width center-text">
            {exchangeKeys.map((value) => <option>{value}</option>)}
          </select>

      let pairsSelect = <select onChange={pairsSelectOnSelect} className="full-width center-text">
            {selectedExchangePairs.map((value) => <option value={value.key}>{value.name}</option>)}
          </select>

      return (
        <div>
          <div id="header" className="full-width center-text">
            <span className="logo">
              <a className="home-link" href="/">
                AlertC<img alt="o" title="To the moon!" className="moon-logo" src={logo} />.in
              </a>
            </span>
          </div>
          <div className="main container full-width center-text">
            Send an alert when
          </div>
          {exchangesSelect}
          {pairsSelect}
        </div>
      );
  }
}

export default App;
