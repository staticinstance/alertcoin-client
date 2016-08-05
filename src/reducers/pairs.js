import exchanges from '../exchanges.json';

export default (state, action) => {
  switch(action.type){
    case "PAIR_SELECTED":
      return state;
    case "EXCHANGE_SELECTED":
      return exchanges[action.payload].pairs;
    default:
      return exchanges[Object.keys(exchanges)[0]].pairs;
  }
}
