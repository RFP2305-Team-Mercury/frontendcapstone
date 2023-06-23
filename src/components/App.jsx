import React from 'react';
import RPandOL from './relatedProducts/RPandOL.jsx';
import RatingsAndReviews from './ratingsAndReviews/RatingsAndReviews.jsx';
import { createStore, combineReducers } from 'redux';
import rootReducers from '../redux/reducers';
import { Provider } from 'react-redux';
import Overview from './overview/Overview.jsx';

export default function App() {

  const store = createStore(rootReducers);

return (
  <Provider store={store}>
  <div>
    <h1>The Mercury Store</h1>
    <Overview />
    <RPandOL />
      </div>
    </Provider>
)
};