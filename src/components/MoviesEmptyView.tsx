import React from 'react';
import {View} from './View';
import {local} from '../localization/local';
import {TextView} from './TextView';

export function MoviesEmptyView() {
  return (
    <View>
      <TextView text={local.noMoviesFound} />
    </View>
  );
}
