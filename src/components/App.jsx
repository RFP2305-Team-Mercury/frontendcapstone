import React from 'react';
import RPandOL from './relatedProducts/RPandOL.jsx'
import { createStore, combineReducers } from 'redux';
import rootReducers from '../redux/reducers';
import { Provider } from 'react-redux'import Details from './overview/Details.jsx'
import Gallery from './overview/Gallery.jsx'

export default function App() {

  const store = createStore(rootReducers);

return (
  <Provider store={store}>
  <div>
    <h1>The Mercury Store</h1>
    <Details />
    <Gallery />
    <RPandOL />

      </div>
    </Provider>
  )
};