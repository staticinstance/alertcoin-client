export default (state, action) => {
  switch(action.type){
    case "AUTH_STATE_CHANGE":
      return action.payload;
    default:
      return state || {}
  }
}
