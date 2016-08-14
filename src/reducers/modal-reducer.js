export default (state, action) => {
  switch(action.type){
    case "HIDE_MODAL":
    case "SHOW_MODAL":
      return action.payload;
    case "AUTH_STATE_CHANGE":
      return action.payload ? state : '';
    default:
      return state || ''
  }
}
