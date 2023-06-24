import inputReducer from './input'
import RPandOLReducer from './RPandOLReducer'
import productIdReducer from './productIdReducer'
import stylesReducer from './stylesReducer'
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
  inputReducer: inputReducer,
  RPandOLReducer: RPandOLReducer,
  productId: productIdReducer,
  styles: stylesReducer
})

export default rootReducers;