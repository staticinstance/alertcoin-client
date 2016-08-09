import axios from 'axios';

export function selectExchange(e){
  return {
    type: "EXCHANGE_SELECTED",
    payload: e.target.value
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
          direction: ">=",
          exchange: getState().selectedExchange,
          exchangeName: "Bittrex",
          pair: "BTC_LSK",
          pairName: "LSK / BTC",
          phone: "2066872025",
          price: "0.00041"
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
