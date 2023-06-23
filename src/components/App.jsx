import React from 'react';


export default function App() {

const store = createStore(rootReducers);

return (
  <Provider store={store}>
  <div>
    <h1>Hello World</h1>
  </div>
  </Provider>
)
};