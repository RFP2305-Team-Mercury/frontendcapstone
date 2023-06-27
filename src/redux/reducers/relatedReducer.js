const relatedReducer = (state = [], action) => {
  //switch case of actions types where global state will be pulled from redux and change.
  switch(action.type){
    case 'SET_LIST':
      console.log('im changing the list now!')
      state = action.payload;
      return state;
    default:
      return state;
  }
}

export default relatedReducer;