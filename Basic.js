import React, { Component } from 'react';
import {
  StyleSheet, 
  Image, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu';

const image = require('./assets/menu.png');
const { width } = Dimensions.get('window');
const height = width * 0.2;
const images = [
  {
      source: require('./assets/pat_embrapa.png'),      
  },
  {
      source: require('./assets/pat_inpasa.png'),
  },
  {
      source: require('./assets/pat_patria.png'),
  },
  {
      source: require('./assets/pat_sinop.png'),
  },
  {
      source: require('./assets/pat_aprosoja.png'),
  },

];
class Carousel extends Component {
  render() {
      const { images } = this.props;
      if (images && images.length) {
          return (
              <View style={styles.scrollContainer}>
                  <ScrollView
                      horizontal
                      // pagingEnabled
                      showsHorizontalScrollIndicator={true} >
                      {images.map((image, i) => (
                          <Image style={styles.imageSlide} source={image.source} key={i} />
                      ))}
                  </ScrollView>
              </View>
          );
      }
      console.log('Please provide images');
      return null;
  }
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class Basic extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      selectedItem: 'About',
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    });

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

    return (
      <>
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        
        <TouchableOpacity
          onPress={this.toggle}
          style={styles.button}
        >
          <Image
            source={image}
            style={{ width: 32, height: 32 }}
          />
        </TouchableOpacity>
      </SideMenu>
  </>        
    );
  }
}