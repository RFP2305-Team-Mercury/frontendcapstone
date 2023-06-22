import inputReducer from './input'
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
  inputReducer: inputReduce
})