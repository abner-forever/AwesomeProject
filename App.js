/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';

import Page from './src'
import { Provider } from 'react-redux';
import store from './src/store';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        networkActivityIndicatorVisible={true}
        backgroundColor={'#f5f5f5'}
        translucent={false}
      />
      <Provider store = {store}>
        <Page />
      </Provider>
    </>
  );
};

export default App;
