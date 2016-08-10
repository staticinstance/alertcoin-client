export default (state, action) => {
  switch(action.type){
    case "DIRECTION_SELECTED":
      return action.payload;
    default:
      return state || ''
  }
}
