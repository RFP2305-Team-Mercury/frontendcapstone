import React from 'react';
import RPandOL from './relatedProducts/RPandOL.jsx';
import RatingsAndReviews from './ratingsAndReviews/RatingsAndReviews.jsx';
import { createStore, combineReducers } from 'redux';
import rootReducers from '../redux/reducers';
import { Provider, useSelector } from 'react-redux';
import Details from './overview/Details.jsx';
import Gallery from './overview/Gallery.jsx';
import QuestionsAndAnswers from './QuestionsAnswers/QuestionsAnswers.jsx'
import Overview from './overview/Overview.jsx';

export default function App() {

  const store = createStore(rootReducers);

return (
  <Provider store={store}>
  <div>
    <h1>The Mercury Store</h1>
    <Overview />
    <Details />
    <Gallery />
    <QuestionsAndAnswers/>
    <Overview />
    <RPandOL />
     </div>
  </Provider>
)
};