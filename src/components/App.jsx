import React from 'react';
import OutfitsList from './relatedProducts/OutfitsList.jsx'
import { createStore, combineReducers } from 'redux';
import rootReducers from '../redux/reducers';
import { Provider } from 'react-redux'import Details from './overview/Details.jsx'
import Gallery from './overview/Gallery.jsx'

export default function App() {

const store = createStore(rootReducers);

return (
  <Provider store={store}>
  <div>
    <h1>Mercurio</h1>
    <Details />
    <Gallery />

    <OutfitsList />
  </div>
  </Provider>
)
};