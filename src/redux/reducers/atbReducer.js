
const atbReducer = (state = true, action) => {
  //switch case of actions types where global state will be pulled from redux and change.
  switch(action.type){
    case 'LOADING_FIRST':
      return state = false;
    default:
      return state
  }
}
export default atbReducer;