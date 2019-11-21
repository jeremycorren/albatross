import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import reducer from './store/reducers';

import Root from './components/Root';

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
