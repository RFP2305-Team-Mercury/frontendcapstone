//Actions are functions that return an object with a 'type/name' property
const getRelatedProducts = (id) => {
  return {
    type: 'GET RELATED PRODUCTS',
    payload: id
  }
}