import axios from 'axios';

export function selectExchange(e){
  return {
    type: "EXCHANGE_SELECTED",
    payload: e.target.value
  }}

export function selectPrice(e){
  return {
    type: "PRICE_SELECTED",
    payload: e.target.value
  }}

export function selectDirection(e){
  return {
    type: "DIRECTION_SELECTED",
    payload: e.target.value
  }}

export function selectDestination(e){
  return {
    type: "DESTINATION_SELECTED",
    payload: e.target.value
  }}

export function selectPriceClick(value){
  return {
    type: "PRICE_SELECTED",
    payload: value
  }}

export function selectPair(e){
  return {
    type: "PAIR_SELECTED",
    payload: e.target.value
  }}

export function addAlert(){
  return (dispatch, getState) => dispatch({
      type: "ADD_ALERT",
      payload: axios.get('http://mb.zipwhip.com:3000', {
        params: {
          direction: getState().selectedDirection,
          exchange: getState().selectedExchange,
          exchangeName: getState().exchanges[getState().selectedExchange].name,
          pair: getState().exchanges[getState().selectedExchange].pairs[getState().selectedPair].key,
          pairName: getState().exchanges[getState().selectedExchange].pairs[getState().selectedPair].name,
          phone: getState().selectedDestination,
          price: getState().selectedPrice
        }
      })
      .then(function (response) {
          //merge response into store of alerts
      })
      .catch(function (error) {
        console.log(error);
      })
    })
  }
