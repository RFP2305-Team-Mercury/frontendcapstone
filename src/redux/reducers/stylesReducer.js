import {SET_STYLES} from '../actions/index.js'

const stylesReducer = (state = [], action) => {
  switch(action.type){
    case 'SET_STYLES':
      return action.payload;
    default:
      return state
  }
}

export default stylesReducer;