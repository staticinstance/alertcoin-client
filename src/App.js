import React, { Component } from 'react';
import logo from './moon.png';
import './App.css';
import data from './data.json'

class App extends Component {
    render() {

      let exchanges = Object.keys(data);

      let selectedExchange = this.state && this.state.selectedExchange ? data[this.state.selectedExchange] || data['btce'] : data['btce'];

      let selectedExchangePairs = Object.keys(selectedExchange.pairs).map((pair) => selectedExchange.pairs[pair]);

      let exchangesSelectOnSelect = (e, value) => {console.log(e.target.value); this.setState({
        selectedExchange: e.target.value
      })}

      let exchangesSelect = <select onChange={exchangesSelectOnSelect} className="full-width center-text">
            {exchanges.map((value) => <option>{value}</option>)}
          </select>

      let pairsSelect = <select className="full-width center-text">
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
