import React, { Component } from 'react';
import './App.css';
import ExchangeList from './containers/exchange-list-container';
import PairList from './containers/pair-list-container';
import PairPrice from './containers/pair-price-container';
import Header from './components/header';

class App extends Component {
  render() {
    return <div className="main">
      <Header/>
      <ExchangeList />
      <PairList />
      <PairPrice />
    </div>
  }
}

export default App;
