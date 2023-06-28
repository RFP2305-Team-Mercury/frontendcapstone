
const modalTypeReducer = (state = 'InputModal', action) => {
  //switch case of actions types where global state will be pulled from redux and change.
  switch(action.type){
    case 'ADD QUESTION':
      //do something
      return state = 'InputModal';
    case 'ADD ANSWER':
      //do something
      return state;
    case 'REPORT':
      //do something
      return state;
    case 'COMPARISON_MODAL':
      return state = 'ComparisonModal'
    default:
      return state
  }
}
export default modalTypeReducer;