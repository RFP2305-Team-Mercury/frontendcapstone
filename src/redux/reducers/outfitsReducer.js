const outfitsReducer = (state = [], action) => {
  //switch case of actions types where global state will be pulled from redux and change.
  switch(action.type){
    case 'ADD_OUTFIT_ITEM':
      console.log('outfits before:',state, 'adding...', action.payload)
      if (state.indexOf(action.payload) != -1) return state;
      state = state.concat(action.payload);
      return state;
    case 'REMOVE_OUTFIT_ITEM':
      let indexOfRemoved = state.indexOf(action.payload)
      state = state.slice(0,indexOfRemoved).concat(state.slice(indexOfRemoved, state.length-1))
      return state;
    default:
      return state;
  }
}

export default outfitsReducer;