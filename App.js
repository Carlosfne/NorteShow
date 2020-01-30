import React,{Component} from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { View, Text, Image } from 'react-native';

import Routes from './src/routes'
import Menu from './src/components/menu'
import { DrawerNavigationState } from 'react-navigation'
import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'


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
      // <> 
      //   <View
      //   style={{
      //     flex: 1,
      //     alignItems: 'center',
      //     flexDirection: 'row',
      //     justifyContent: this.state.align,
      //     marginHorizontal: 40,
      //   }}>
      //   <Image
      //     source={require('./assets/logo.png',
      //     )}
      //   />
      //   {!this.state.alignsecond ? null : (
         <>
         <StatusBar barStyle='light-content' backgroundColor= '#7d47e0'/>
          <Routes />
          </>
      //   )}
      // </View>     
      // </>
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
