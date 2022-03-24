/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import React from 'react';

import store from './src/store/store';

const newStore = store();

const RNRedux = () => (
  <Provider store={newStore}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
