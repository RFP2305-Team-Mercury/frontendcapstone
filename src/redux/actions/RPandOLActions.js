const addItem = (prodID) => {
  return {
    type: 'ADD_PRODUCT',
    payload: prodID
  }
}
const removeItem = (prodID) => {
  return {
    type: 'REMOVE_PRODUCT',
    payload: prodID
  }
}
export default { addItem, removeItem }