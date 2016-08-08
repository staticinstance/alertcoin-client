export default (state, action) => {
  switch(action.type){
    case "PAIR_SELECTED":
      return action.payload;
    default:
      return state || ''
  }
}
