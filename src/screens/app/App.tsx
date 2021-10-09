import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '../../store/configureStore';
import {HomeScreen} from '../home/HomeScreen';

export function App() {
  return (
    <Provider store={configureStore()}>
      <HomeScreen />
    </Provider>
  );
}
