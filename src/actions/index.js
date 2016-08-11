import axios from 'axios';
import selectedExchangeSelector from '../selectors/selected-exchange-selector';
import selectedPairSelector from '../selectors/selected-pair-selector';
import firebase from 'firebase';
import config from "../firebase-config.json"

let exchanges = {};

firebase.initializeApp(config);
var exchangesRef = firebase.database().ref('/exchanges/-KOtWzIGIkEj_KiiyvU1');

//using redux-thunk middleware
export function initState(){
  return (dispatch, getState) => {
      dispatch({
        type: "EXCHANGES_LOADED",
        payload: exchanges
      });
      dispatch(fetchExchanges());
  }
}

export function fetchExchanges(){
  return (dispatch, getState) => {
    exchangesRef.on('value', function(snapshot) {
      exchanges = snapshot.val();
      dispatch({
        type: "EXCHANGES_LOADED",
        payload: exchanges
      })
      dispatch(selectExchange());
      dispatch(selectDirection());
    });

  }
}

export function selectExchange(e){
  return (dispatch, getState) => {
    dispatch({
      type: "EXCHANGE_SELECTED",
      payload: e ? e.target.value : selectedExchangeSelector(getState()).key
    });
    dispatch(selectPair());
  }
}

//using plain old redux dispatch
export function selectPrice(e){
  return {
    type: "PRICE_SELECTED",
    payload: e.target.value
  }
}

export function selectDirection(e){
  return {
    type: "DIRECTION_SELECTED",
    payload: e ? e.target.value : '>='
  }
}

export function selectDestination(e){
  return {
    type: "DESTINATION_SELECTED",
    payload: e.target.value
  }
}

export function selectPriceClick(value){
  return {
    type: "PRICE_SELECTED",
    payload: value
  }
}

export function hideModal(){
  return {
    type: "HIDE_MODAL",
    payload: ""
  }
}

export function showModal(config){
  return {
    type: "SHOW_MODAL",
    payload: config
  }
}

export function selectPair(e){
  return (dispatch, getState) => {
    dispatch({
      type: "PAIR_SELECTED",
      payload: e ? e.target.value : selectedPairSelector(getState()).key
    })
  }
}

//using redux-promise-middleware
export function addAlert(){
  return (dispatch, getState) => {
      const params = {
        direction: getState().selectedDirection,
        exchange: selectedExchangeSelector(getState()).key,
        exchangeName: selectedExchangeSelector(getState()).name,
        pair: selectedPairSelector(getState()).key,
        pairName: selectedPairSelector(getState()).name,
        phone: getState().selectedDestination,
        price: getState().selectedPrice
      };

      if(!getState().selectedDestination){
        dispatch(showModal({title: "Oops", message: "Please enter your @twittername or phone number."}));
        return;
      }

      if(!getState().selectedPrice){
        dispatch(showModal({title: "Oops", message: "Please enter a price."}));
        return;
      }

      dispatch({
        type: "ADD_ALERT",
        payload: axios.post('http://mb.zipwhip.com:3000', {
          params
        })
        .then(function (response) {
          dispatch(showModal({title: "Alert saved", message: `${getState().selectedDestination} will be alerted when the last trade for ${selectedPairSelector(getState()).name} at ${selectedExchangeSelector(getState()).name} is ${getState().selectedDirection} ${getState().selectedPrice}`}))
        })
        .catch(function (error) {
          dispatch(showModal({title: "There was a problem saving your alert", message: error.toString() || ""}));
        })
      })
    }
  }
