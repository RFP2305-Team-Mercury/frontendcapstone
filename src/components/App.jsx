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

  const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

return (
  <Provider store={store}>
  <div>
    {/* <Overview /> */}
    <RPandOL />
    {/* <QuestionsAndAnswers/> */}
    <RatingsAndReviews />
  </div>
  </Provider>
)
};