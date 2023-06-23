import React from 'react';
import { createStore } from 'redux'
import rootReducers from '../redux/reducers'
import Questions from './QuestionsAndAnswers/QuestionsAndAnswers.jsx'


export default function App() {

const store = createStore(rootReducers);

return (
  <Provider store={store}>
  <div>
    <h1>The Mercury Store</h1>
    <Details />
    <Gallery />
    <OutfitsList />
    <QuestionsAndAnswers/>
    <RatingsAndReviews />
  </div>
  </Provider>
)
};