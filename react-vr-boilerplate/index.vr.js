import React from 'react';

import {createStore} from 'redux'
import rootReducer from './data/rootReducer';

import {Provider} from 'react-redux';
import IndexContainer from './containers/IndexContainer';

import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

const store = createStore(rootReducer, {});

const App = () => {
  return (
    <Provider store={store}>
      <IndexContainer />
    </Provider>
  );
};

AppRegistry.registerComponent('react_vr_boilerplate', () => App);
