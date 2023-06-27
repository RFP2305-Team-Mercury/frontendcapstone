import inputReducer from './input'
import outfitsReducer from './outfitsReducer'
import relatedReducer from './relatedReducer'
import productIdReducer from './productIdReducer'
import stylesReducer from './stylesReducer'
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
  inputReducer: inputReducer,
  outfits: outfitsReducer,
  productId: productIdReducer,
  styles: stylesReducer,
  relatedList: relatedReducer
})

export default rootReducers;