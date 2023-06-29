const modalOpenReducer = (state = false, action) => {
  //switch case of actions types where global state will be pulled from redux and change.

  switch(action.type){
    case 'OPEN_MODAL':
      state = true
      console.log('Modal Should Open because state is: ',state)
      return state
    case 'CLOSE_MODAL':
      return state = false
    default:
      return state
  }
}
export default modalOpenReducer;