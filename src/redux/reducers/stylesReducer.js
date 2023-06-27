<<<<<<< HEAD
import {SET_STYLES} from '../actions/index.js'
=======
import {SET_STYLES} from '../actions'
>>>>>>> 66584a5d6782f0657ac778a09d1ccf42c1da8000

const stylesReducer = (state = [], action) => {
  switch(action.type){
    case 'SET_STYLES':
      return action.payload;
    default:
      return state
  }
}

export default stylesReducer;