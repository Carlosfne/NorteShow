import React,{Component} from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { View, Text, Image } from 'react-native';

import Routes from './src/routes'
import Basic from './Basic'
import Home from './HomeScreen'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      animating: false,
      align: 'center',
      alignsecond: false,
    };
    setTimeout(
      () =>
        this.setState({ align: 'flex-start' }, function() {
          this.setState({
            alignsecond: true,
          });
        }),
      3000
    );
  }
  
  render(){
    return (
      <>
          {/* <Basic /> */}
        <StatusBar barStyle='light-content' backgroundColor= '#7d47e0' />
        <Routes />
        {/* <Home /> */}
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: StatusBar.currentHeight,
  }
});
