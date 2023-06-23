//Initial State will be an "input form" where user has to input specific action ie: question, answer, or report

const inputReducer = (state = {}, action) => {
  //switch case of actions types where global state will be pulled from redux and change.
  switch(action.type){
    case 'ADD QUESTION':
      //do something
      return state;
    case 'ADD ANSWER':
      //do something
      return state;
    case 'REPORT':
      //do something
      return state;
    default:
      return state
  }
}

export default inputReducer