import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

import Routes from './src/routes'
import Menu from './src/components/menu'
import { DrawerNavigationState } from 'react-navigation'
import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'
console.log(Routes)

export default function App() {
  return (
    <>
      {/* <Menu /> */}
    <StatusBar barStyle='light-content' backgroundColor= '#7d47e0'>
      </StatusBar>
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
