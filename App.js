import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import Routes from './src/routes'

export default function App() {
  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor= '#7d47e0'/>
    <Routes />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: StatusBar.currentHeight,
  }
});
