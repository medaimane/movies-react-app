import React, {ReactNode} from 'react';
import {ViewState} from '../store/ViewState';
import {ErrorView} from './ErrorView';
import {LoadingView} from './LoadingView';
import {View} from './View';

export function RemoteData(props: {
  viewState: ViewState;
  renderData: () => ReactNode;
  renderEmpty: () => ReactNode;
}) {
  const content = () => {
    switch (props.viewState) {
      case ViewState.Data: {
        return props.renderData();
      }

      case ViewState.Empty: {
        return props.renderEmpty();
      }

      case ViewState.Error: {
        return <ErrorView />;
      }

      case ViewState.Loading: {
        return <LoadingView />;
      }
    }
  };

  return <View>{content()}</View>;
}
