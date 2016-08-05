import React, { Component } from 'react';
import './App.css';
import ExchangeList from './containers/exchange-list';
import PairList from './containers/pair-list';
import Header from './components/header';

class App extends Component {
  render() {
    return <div className="main">
      <Header/>
      <ExchangeList />
      <PairList />
    </div>
  }
}

export default App;
