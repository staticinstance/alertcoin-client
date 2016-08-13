import React, { Component } from 'react';
import '../App.css';
import ExchangeList from '../containers/exchange-list-container';
import PairList from '../containers/pair-list-container';
import PairPrice from '../containers/pair-price-container';
import Destination from '../containers/selected-destination-container';
import PriceDirection from '../containers/selected-price-direction-container';
import Header from '../components/header';
import AlertButton from '../containers/alert-button-container';
import Modal from '../containers/modal-container';
import AuthForm from '../containers/auth-container';
import LogoutButton from '../containers/logout-button-container';

class App extends Component {
  componentWillMount(){
    this.props.initState();
  }

  render() {
    return this.props.auth !==null && Object.keys(this.props.auth).length > 0
    ? <div className="main">
        <Header/>
        <Destination />
        <ExchangeList />
        <PairList />
        <PriceDirection />
        <PairPrice />
        <AlertButton />
        <LogoutButton />
        <Modal />
      </div>
    : <div className="main">
        <Header/>
        <AuthForm />
        <Modal />
      </div>
  }
}

export default App;
