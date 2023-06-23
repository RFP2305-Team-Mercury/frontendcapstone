//Initial State will be a "input form" where user has to input specific action ie: question, answer, or report

const cartReducer = (state = {}, action) => {
  //switch case of actions types where global state will be pulled from redux and change.
  switch(action.type){
    case 'ADD_ITEM':
      //do something
      return state;
    case 'SELECT_SIZE':
      //do something
      return state;
    case 'SELECT_QUANTITY':
      //do something
      return state;
      case 'SELECT_STYLE':
      //do something
      return state;
    default:
      return state
  }
}

export default cartReducer;