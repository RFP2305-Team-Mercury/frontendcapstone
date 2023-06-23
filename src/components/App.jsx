import React from 'react';
import OutfitsList from './relatedProducts/OutfitsList.jsx'
import RatingsAndReviews from './ratingsAndReviews/RatingsAndReviews.jsx';
import { createStore, combineReducers } from 'redux';
import rootReducers from '../redux/reducers';
import { Provider } from 'react-redux'

export default function App() {

const store = createStore(rootReducers);

return (
  <Provider store={store}>
  <div>
    <h1>Hello World</h1>

    <OutfitsList />
    <RatingsAndReviews />
  </div>
  </Provider>
)
};