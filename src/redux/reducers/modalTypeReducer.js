import api from '../../apis/QA.js'


const modalTypeReducer = (state = 'InputModal', action) => {
  //switch case of actions types where global state will be pulled from redux and change.
  switch(action.type){
    case 'ADD_QUESTION':
      //do something
      return state = {type: 'InputModal'};
    case 'ADD_ANSWER':
      //do something,
      const questionId = action.payload
      return state = {type: 'AnswerModal', id: questionId}
    case 'COMPARISON_MODAL':
      return state = {type: 'ComparisonModal'}
    case 'NEW_REVIEW_MODAL':
      return state = {type: 'NewReviewModal'}
    default:
      return state
  }
}
export default modalTypeReducer;