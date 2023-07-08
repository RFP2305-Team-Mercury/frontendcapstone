//RPandOLActions.js
export const setList = (array) => {
  return {
    type: 'SET_LIST',
    payload: array
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

export const SET_DETAILS = (data) => {
  return {
    type: 'SET_DETAILS',
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

  return {
    type: 'ADD_ANSWER',
    payload: id
  }
};
export const setQuestionId = (id) => {

  return {
    type: 'SET_QUESTION_ID',
    payload: id
  };
};


export const openModal = (id) => {
  return {
    type: 'OPEN_MODAL',
    payload: id
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
export const loadingFirst = ()=>{
  return {
    type: 'LOADING_FIRST'
  }
}