import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import rootReducers from './redux/reducers';
import {Provider} from 'react-redux';
import { createStore, combineReducers } from 'redux';
const store = createStore(rootReducers);
const container = document.getElementById('app');

const root = createRoot(container);

root.render( <Provider store={store}><App /></Provider>);