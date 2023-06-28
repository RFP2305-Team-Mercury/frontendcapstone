
const comparisonIdReducer = (state = 0, action) => {
  //switch case of actions types where global state will be pulled from redux and change.
  switch(action.type){
    case 'SET_COMPARISON_ID':
      return state = action.payload;
    default:
      return state
  }
}
export default comparisonIdReducer;