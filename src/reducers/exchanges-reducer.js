export default (state, action) => {
  switch(action.type){
    case "EXCHANGES_LOADED":
      return action.payload;
    default:
      return state || {}
  }
}
