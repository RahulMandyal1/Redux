import React from 'react';
import Cakecontainer from './Cakecontainer';
import store from '../redux/cakes/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Cakecontainer/>
    </Provider>
  )
}

export default App