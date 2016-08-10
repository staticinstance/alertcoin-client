export default (state, action) => {
  switch(action.type){
    case "PRICE_SELECTED":
      return action.payload;
    case "EXCHANGE_SELECTED":
    case "PAIR_SELECTED":
      return '';
    default:
      return state || ''
  }
}
