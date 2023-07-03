
const modalTypeReducer = (state = 'InputModal', action) => {
  //switch case of actions types where global state will be pulled from redux and change.
  switch(action.type){
    case 'ADD_QUESTION':
      //do something
      return state = 'InputModal';
    case 'ADD_ANSWER':
      //do something
      return state = 'AnswerModal';
    case 'REPORT':
      //do something
      return state;
    case 'COMPARISON_MODAL':
      return state = 'ComparisonModal'
    case 'NEW_REVIEW_MODAL':
      return state = 'NewReviewModal'
    default:
      return state
  }
}
export default modalTypeReducer;