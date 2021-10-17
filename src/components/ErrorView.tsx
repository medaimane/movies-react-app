import React from 'react';
import {Error as ErrorIcon} from '@mui/icons-material';
import {local} from '../localization/local';
import {View} from './View';
import {TextView} from './TextView';

export function ErrorView() {
  return (
    <View>
      <ErrorIcon />
      <TextView text={local.somethingWentWrong} />
    </View>
  );
}
