import React from 'react';
import Cakecontainer from './Cakecontainer';
import store from '../redux/cakes/store';
import { Provider } from 'react-redux';
import HooksCakecontainer from './HooksCakecontainer';

function App() {
  return (
    <Provider store={store}>
      <Cakecontainer/>
      <HooksCakecontainer/>
    </Provider>
  )
}

export default App