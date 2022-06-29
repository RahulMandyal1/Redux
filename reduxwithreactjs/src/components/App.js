import React from 'react';
import Cakecontainer from './Cakecontainer';
import store from '../redux/store';
import { Provider } from 'react-redux';
import HooksCakecontainer from './HooksCakecontainer';
import IceCreamContainer from './IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <Cakecontainer/>
      <HooksCakecontainer/>
      <IceCreamContainer/>
    </Provider>
  )
}

export default App