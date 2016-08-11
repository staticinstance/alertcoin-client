export default (state, action) => {
  switch(action.type){
    case "HIDE_MODAL":
    case "SHOW_MODAL":
      return action.payload;
    default:
      return state || ''
  }
}
