export default (state, action) => {
  switch(action.type){
    case "EXCHANGE_SELECTED":
      return '';
    case "PAIR_SELECTED":
      return action.payload;
    default:
      return state || ''
  }
}
