import React, { Component } from 'react';
import './App.css';
import ExchangeList from './containers/exchange-list-container';
import PairList from './containers/pair-list-container';
import PairPrice from './containers/pair-price-container';
import Destination from './containers/selected-destination-container';
import PriceDirection from './containers/selected-price-direction-container';
import Header from './components/header';
import AlertButton from './containers/alert-button-container';

class App extends Component {
  render() {
    return <div className="main">
      <Header/>
      <Destination />
      <ExchangeList />
      <PairList />
      <PriceDirection />
      <PairPrice />
      <AlertButton />
    </div>
  }
}

export default App;
