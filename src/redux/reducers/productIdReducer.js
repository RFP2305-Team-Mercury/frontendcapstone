
const productIdReducer = (state = 40347, action) => {
  //switch case of actions types where global state will be pulled from redux and change.
  switch(action.type){
    case 'SET_ID':
      console.log('Changing Product ID to :',action.payload)
      return state = action.payload;
    default:
      return state
  }
}
export default productIdReducer;