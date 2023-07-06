
const questionIdReducer = (state = 0, action) => {
  //switch case of actions types where global state will be pulled from redux and change.
  switch(action.type){
    case 'SET_QUESTION_ID':
      console.log('Changing question ID to :',action.payload)
      return state = action.payload;
    default:
      return state
  }
}
export default questionIdReducer;