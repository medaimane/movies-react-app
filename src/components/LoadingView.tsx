import React from 'react';
import {CircularProgress} from '@mui/material';
import {View} from './View';

export function LoadingView() {
  return (
    <View>
      <CircularProgress />
    </View>
  );
}
