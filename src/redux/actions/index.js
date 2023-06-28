//RPandOLActions.js
export const addOutfitItem = (prodID) => {
  return {
    type: 'ADD_OUTFIT_ITEM',
    payload: prodID
  };
};
export const removeOutfitItem = (prodID) => {
  return {
    type: 'REMOVE_OUTFIT_ITEM',
    payload: prodID
  };
};
export const setList = (array) => {
  return {
    type: 'SET_LIST',
    payload: array
  };
};

//cartAction.js
export const addToCart = (sku_id) => {
  return {
    type: 'ADD_ITEM',
    payload: sku_id
  };
};

export const selectSize = () => {
  return {
    type: 'SELECT_SIZE'
  };
};

export const selectQuantity = () => {
  return {
    type: 'SELECT_QUANTITY'
  };
};
export const selectStyle = () => {
  return {
    type: 'SELECT_STYLE'
  };
};


//productId.js
export const setId = (id) => {
  return {
    type: 'SET_ID',
    payload: id
  };
};
export const SET_STYLES = (data) => {
  return {
    type: 'SET_STYLES',
    payload: data
  };
};

export const SET_SELECTED = (data) => {
  return {
    type: 'SET_SELECTED',
    payload: data
  };
};

//input.js
export const question = () => {
  return {
    type: 'ADD QUESTION'
  }
};
export const answer = () => {
  return {
    type: 'ADD ANSWER'
  }
};
export const report = () => {
  return {
    type: 'REPORT'
  }
}

export const openModal = () => {
  return {
    type: 'Open Modal'
  }
}
export const closeModal = () => {
  return {
    type: 'Close Modal'
  }
}
export const comparisonModal = ()=>{
  return {
    type: 'COMPARISON_MODAL'
  }
}
export const comparisonId = () =>{
  return {
    type: 'SET_COMPARISON_ID'}
}