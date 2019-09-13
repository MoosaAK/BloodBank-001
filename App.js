import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { Provider } from 'react-redux'
import Routes from './Routes'
import store from './redux/index';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

