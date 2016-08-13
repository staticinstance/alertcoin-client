import selectedExchangeSelector from '../selectors/selected-exchange-selector';
import selectedPairSelector from '../selectors/selected-pair-selector';
import firebase from 'firebase';
import config from "../firebase-config.json"

let exchanges = {};
let alerts = {};

firebase.initializeApp(config);
var exchangesRef = firebase.database().ref('/exchanges');
var alertsRef = firebase.database().ref('/alerts');

function showErrorModal(dispatch, error){
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    dispatch(showModal({title: errorCode, message: errorMessage}));
  }

export function logout(){
  return (dispatch, getState) => {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }, function(error) {
      // An error happened.
    });
  }
}

export function loginOrCreateUser(credentials){
    return (dispatch, getState) => {
      if(!credentials.login){
        firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
          .catch(function(error) {
            showErrorModal(dispatch, error);
          });
      } else {
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
          .catch(function(error) {
            showErrorModal(dispatch, error);
          });
      }

    }
  }

//using redux-thunk middleware
export function initState(){
  return (dispatch, getState) => {

      //remove this after auth coding is complete
      //this is just here for dev
      dispatch(fetchExchanges());

      firebase.auth().onAuthStateChanged(function(user) {
          dispatch({
            type: "AUTH_STATE_CHANGE",
            payload: user
          });

          if (user) {
            dispatch(fetchExchanges());
          }
      });
    }
  }

export function fetchAlerts(alerts){
  return {
    type: "ALERTS_LOADED",
    payload: alerts
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
    alertsRef.on('value', function(snapshot) {
      alerts = snapshot.val();
      dispatch(fetchAlerts(alerts))
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
        price: getState().selectedPrice,
        created: new Date().getTime()
      };

      if(!getState().selectedDestination){
        dispatch(showModal({title: "Oops", message: "Please enter your @twittername or phone number."}));
        return;
      }

      if(!getState().selectedPrice){
        dispatch(showModal({title: "Oops", message: "Please enter a price."}));
        return;
      }
      const id = alertsRef.push(params)
      if(id){
        dispatch({
          type: "ADD_ALERT",
          payload: {...params, id}
        });
        dispatch(showModal({title: "Alert saved", message: `${getState().selectedDestination} will be alerted when the last trade for ${selectedPairSelector(getState()).name} at ${selectedExchangeSelector(getState()).name} is ${getState().selectedDirection} ${getState().selectedPrice}`}))
      }else{
        dispatch(showModal({title: "There was a problem saving your alert", message: "There was a problem saving your alert."}));
      }

        // dispatch({
        //   type: "ADD_ALERT",
        //   payload: {...params, id}
        //   payload: axios.post('http://mb.zipwhip.com:3000', {
        //     params
        //   })
        //   .then(function (response) {
        //     dispatch(showModal({title: "Alert saved", message: `${getState().selectedDestination} will be alerted when the last trade for ${selectedPairSelector(getState()).name} at ${selectedExchangeSelector(getState()).name} is ${getState().selectedDirection} ${getState().selectedPrice}`}))
        //   })
        //   .catch(function (error) {
        //     dispatch(showModal({title: "There was a problem saving your alert", message: error.toString() || ""}));
        //   })
       //})

    }
  }
