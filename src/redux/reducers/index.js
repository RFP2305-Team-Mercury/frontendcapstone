import outfitsReducer from './outfitsReducer'
import relatedReducer from './relatedReducer'
import productIdReducer from './productIdReducer'
import stylesReducer from './stylesReducer'
import modalOpenReducer from './modalOpenReducer'
import modalTypeReducer from './modalTypeReducer'
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
  outfits: outfitsReducer,
  productId: productIdReducer,
  styles: stylesReducer,
  relatedList: relatedReducer,
  open: modalOpenReducer,
  modalType: modalTypeReducer
})

export default rootReducers;