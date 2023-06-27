const outfitsReducer = (state = [], action) => {
  //switch case of actions types where global state will be pulled from redux and change.
  switch(action.type){
    case 'ADD_ITEM':
      state = state.concat(action.payload);
      break;
    case 'REMOVE_ITEM':
      let indexOfRemoved = state.indexOf(action.payload)
      state = state.slice(0,indexOfRemoved).concat(state.slice(indexOfRemoved))
      break;
    }

    return state;
}

export default outfitsReducer;