export const addItem = (prodID) => {
  return {
    type: 'ADD_PRODUCT',
    payload: prodID
  }
}
export const removeItem = (prodID) => {
  return {
    type: 'REMOVE_PRODUCT',
    payload: prodID
  }
}
export const setList = (array) => {
  return {
    type: 'SET_LIST',
    payload: array
  }
}
export const setId = (id) => {
  return {
    type: 'SET_ID',
    payload: id,
  };
};