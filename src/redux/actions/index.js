//RPandOLActions.js
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
export const question = (data) => {
  return {
    type: 'ADD_QUESTION',
    payload: data
  }
};
export const answer = (id) => {
  console.log(id)
  return {
    type: 'ADD_ANSWER',
    payload: id
  }
};
export const setQuestionId = (id) => {
  console.log(id)
  return {
    type: 'SET_QUESTION_ID',
    payload: id
  };
};


export const openModal = () => {
  return {
    type: 'OPEN_MODAL'
  }
}
export const closeModal = () => {
  return {
    type: 'CLOSE_MODAL'
  }
}
export const comparisonModal = ()=>{
  return {
    type: 'COMPARISON_MODAL'
  }
}
export const setComparisonId = (id) =>{
  return {
    type: 'SET_COMPARISON_ID',
    payload:id
  }
}
export const newReviewModal = ()=>{
  return {
    type: 'NEW_REVIEW_MODAL'
  }
}