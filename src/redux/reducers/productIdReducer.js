<<<<<<< HEAD
import setId from '../actions/index.js'
=======
>>>>>>> 66584a5d6782f0657ac778a09d1ccf42c1da8000

const productIdReducer = (state = 40347, action) => {
  //switch case of actions types where global state will be pulled from redux and change.
  switch(action.type){
    case 'SET_ID':
      return action.payload;
    default:
      return state
  }
}
export default productIdReducer;