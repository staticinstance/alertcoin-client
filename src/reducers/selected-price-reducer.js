export default (state, action) => {
  switch(action.type){
    case "PRICE_SELECTED":
      return { selectedPrice: action.payload };
    default:
      return state || ''
  }
}
