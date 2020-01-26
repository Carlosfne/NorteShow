import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, Dimensions, StatusBar } from 'react-native';

import Routes from './src/routes'

class Carousel extends Component {
  render() {      
          return (
              <View >
                <Text>Carlos</Text>
              </View>
          );
      }
}

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
