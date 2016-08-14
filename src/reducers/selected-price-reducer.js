export default (state, action) => {
  switch(action.type){
    case "PRICE_SELECTED":
      return action.payload;
    case "EXCHANGE_SELECTED":
    case "PAIR_SELECTED":
      return '';
    case "AUTH_STATE_CHANGE":
      return action.payload ? state : '';
    default:
      return state || ''
  }
}
