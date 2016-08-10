export default (state, action) => {
  switch(action.type){
    case "DESTINATION_SELECTED":
      return action.payload;
    default:
      return state || ''
  }
}
