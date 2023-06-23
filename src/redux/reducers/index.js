import inputReducer from './input'
import getRelatedProducts from './getRelatedProducts'
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
  inputReducer: inputReducer,
  getRelatedProducts: getRelatedProducts
})

export default rootReducers;