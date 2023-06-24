import {SET_STYLES} from '../actions/productId.js'

const stylesReducer = (state = [], action) => {
  //switch case of actions types where global state will be pulled from redux and change.
  switch(action.type){
    case 'SET_STYLES':
      return action.payload;
    default:
      return state
  }
}

export default stylesReducer;