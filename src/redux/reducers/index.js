import outfitsReducer from './outfitsReducer'
import relatedReducer from './relatedReducer'
import productIdReducer from './productIdReducer'
import stylesReducer from './stylesReducer'
import modalOpenReducer from './modalOpenReducer'
import modalTypeReducer from './modalTypeReducer'
import selectReducer from './selectReducer'
import comparisonReducer from './comparisonReducer'
import {combineReducers} from 'redux'

const rootReducers = combineReducers({
  outfits: outfitsReducer,
  productId: productIdReducer,
  styles: stylesReducer,
  relatedList: relatedReducer,
  open: modalOpenReducer,
  modalType: modalTypeReducer,
  selected: selectReducer,
  comparisonId: comparisonReducer
})

export default rootReducers;