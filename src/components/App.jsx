import React from 'react';
import RPandOL from './relatedProducts/RPandOL.jsx';
import RatingsAndReviews from './ratingsAndReviews/RatingsAndReviews.jsx';
import { createStore, combineReducers } from 'redux';
import rootReducers from '../redux/reducers';
import { Provider, useSelector } from 'react-redux';
import Details from './overview/Details.jsx';
import Gallery from './overview/Gallery.jsx';

export default function App() {

  const store = createStore(rootReducers);

return (
  <Provider store={store}>
  <div>
    <h1 className="text-3xl font-bold">The Mercury Store</h1>
    <Details />
    <Gallery />
    <RPandOL />
    <RatingsAndReviews />
      </div>
    </Provider>
  )
};