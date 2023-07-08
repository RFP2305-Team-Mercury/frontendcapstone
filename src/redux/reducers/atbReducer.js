
const atbReducer = (state = 0, action) => {
  //switch case of actions types where global state will be pulled from redux and change.
  switch(action.type){
    case 'LOADING_NEXT':
      return state ++;
    default:
      return state
  }
}
export default atbReducer;