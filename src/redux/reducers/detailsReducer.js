const detailsReducer = (state = {}, action) => {
  //switch case of actions types where global state will be pulled from redux and change.
  switch(action.type){
    case 'SET_DETAILS':
      return state = action.payload;
    default:
      return state
  }
}
export default detailsReducer;