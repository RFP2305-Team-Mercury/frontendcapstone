import React from 'react';
import { createStore, combineReducers } from 'redux';
import rootReducers from '../redux/reducers';
import { Provider, useSelector } from 'react-redux';

// import components
import Overview from './overview/Overview.jsx';
import RPandOL from './relatedProducts/RPandOL.jsx';
import QuestionsAndAnswers from './QuestionsAnswers/QuestionsAnswers.jsx'
import RatingsAndReviews from './ratingsAndReviews/RatingsAndReviews.jsx';

export default function App() {

  const store = createStore(rootReducers);

return (
  <Provider store={store}>
  <div>
    <h1 className="text-3xl font-bold">The Mercury Store</h1>
    {/* <Overview /> */}
    <RPandOL />
    <QuestionsAndAnswers/>
    <RatingsAndReviews />
  </div>
  </Provider>
)
};