import inputReducer from './input'
import outfitReducer from './outfitReducer'
import productIdReducer from './productIdReducer'
import stylesReducer from './stylesReducer'
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
  inputReducer: inputReducer,
  outfit: outfitReducer,
  productId: productIdReducer,
  styles: stylesReducer
})

export default rootReducers;