import {SET_STYLES} from '../actions'


const stylesReducer = (state = [], action) => {
  switch(action.type){
    case 'SET_STYLES':
      return state = action.payload;
    default:
      return state;
  }
}

export default stylesReducer;