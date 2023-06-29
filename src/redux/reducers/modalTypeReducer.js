
const modalTypeReducer = (state = 'InputModal', action) => {
  //switch case of actions types where global state will be pulled from redux and change.
  switch(action.type){
    case 'ADD_QUESTION':
      //do something
      return state = 'InputModal';
    case 'ADD_ANSWER':
      //do something
      return state = 'AnswerModal';
    default:
      return state
  }
}
export default modalTypeReducer;