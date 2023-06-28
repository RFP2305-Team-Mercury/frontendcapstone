const relatedReducer = (state = [], action) => {
  //switch case of actions types where global state will be pulled from redux and change.
  switch(action.type){
    case 'ADD_ITEM':
      state = state.concat(action.payload);
      return state;
    case 'REMOVE_ITEM':
      let indexOfRemoved = state.indexOf(action.payload)
      state = state.slice(0,indexOfRemoved).concat(state.slice(indexOfRemoved+1))
      return state;
    case 'SET_LIST':
      console.log('Im in relatedReducer.js and my new State is',action.payload)
      state = action.payload;
      return state;
    default:
      return [];
  }
}

export default relatedReducer;