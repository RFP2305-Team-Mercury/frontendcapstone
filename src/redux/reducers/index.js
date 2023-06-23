import inputReducer from './input'
import RPandOLReducer from './RPandOLReducer'
import productIdReducer from './productIdReducer'
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
  inputReducer: inputReducer,
  RPandOLReducer: RPandOLReducer,
  productId: productIdReducer
})

export default rootReducers;