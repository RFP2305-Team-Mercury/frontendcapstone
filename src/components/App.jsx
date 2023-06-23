import React from 'react';
<<<<<<< HEAD

=======
import OutfitsList from './relatedProducts/OutfitsList.jsx'
import RatingsAndReviews from './ratingsAndReviews/RatingsAndReviews.jsx';
import { createStore, combineReducers } from 'redux';
import rootReducers from '../redux/reducers';
import { Provider } from 'react-redux'import Details from './overview/Details.jsx'
import Gallery from './overview/Gallery.jsx'
>>>>>>> main

export default function App() {

const store = createStore(rootReducers);

return (
  <Provider store={store}>
  <div>
<<<<<<< HEAD
    <h1>Hello World</h1>
=======
    <h1>The Mercury Store</h1>
    <Details />
    <Gallery />

    <OutfitsList />
    <RatingsAndReviews />
>>>>>>> main
  </div>
  </Provider>
)
};