const modalOpenReducer = (state = false, action) => {
  //switch case of actions types where global state will be pulled from redux and change.

  switch(action.type){
    case 'Open Modal':
      state = true
      console.log('Modal SHould Open because state is: ',state)
      return state
    case 'Close Modal':
      return state = false
    default:
      return state
  }
}
export default modalOpenReducer;