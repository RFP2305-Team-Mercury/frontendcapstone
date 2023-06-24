import inputReducer from './input'
import outfitReducer from './outfitReducer'
import productIdReducer from './productIdReducer'
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
  inputReducer: inputReducer,
  outfit: outfitReducer,
  productId: productIdReducer
})

export default rootReducers;