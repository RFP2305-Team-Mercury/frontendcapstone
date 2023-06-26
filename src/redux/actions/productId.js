export const setId = (id) => {
  return {
    type: 'SET_ID',
    payload: id,
  };
};

export const SET_STYLES = (data) => {
  return {
    type: 'SET_STYLES',
    payload: data,
  };
};

export const SET_SELECTED = (data) => {
  return {
    type: 'SET_SELECTED',
    payload: data,
  };
};