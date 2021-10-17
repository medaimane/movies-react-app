import React from 'react';
import {CssBaseline} from '@mui/material';
import {Provider} from 'react-redux';
import {store} from '../store/configureStore';
import {HomeScreen} from './home/HomeScreen';

export function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <HomeScreen />
    </Provider>
  );
}
