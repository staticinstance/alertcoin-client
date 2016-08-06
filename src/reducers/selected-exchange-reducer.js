export default (state, action) => {
  switch(action.type){
    case "EXCHANGE_SELECTED":
      return action.payload;
    default:
      if(state){
        const exchangeKeys = Object.keys(state.exchanges)[0]
        const firstExchange = state.exchanges[exchangeKeys[0]];
        const firstpair = firstExchange.pairs[Object.keys(firstExchange.pairs)[0]];
        return firstpair;
      }else{
        return 'btce'
      }
  }
}
