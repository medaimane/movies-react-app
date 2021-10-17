import React from 'react';
import {local} from '../localization/local';
import {TextView} from './TextView';
import {View} from './View';

export function WelcomeView() {
  return (
    <View>
      <TextView text={local.welcome} />
    </View>
  );
}
