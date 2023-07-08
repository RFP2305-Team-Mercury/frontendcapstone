
const productIdReducer = (state = 40348, action) => {
  //switch case of actions types where global state will be pulled from redux and change.
  switch(action.type){
    case 'SET_ID':
      return state = action.payload;
    default:
      return state
  }
}
export default productIdReducer;