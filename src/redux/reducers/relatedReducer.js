const relatedReducer = (state = [], action) => {
  //switch case of actions types where global state will be pulled from redux and change.
  switch(action.type){
    case 'ADD_ITEM':
      //do something
    case 'REMOVE_ITEM':
      //do something
  }
  return state;
}

export default relatedReducer;