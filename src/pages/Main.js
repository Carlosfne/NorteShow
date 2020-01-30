import React, { Component, useState, useEffect } from 'react';
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

} from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';
// import Footer from '../components/footer'
import Menu from '../components/menu'

import api from '../services/api';

const { width } = Dimensions.get('window');
const height = width * 0.2;
const images = [
  {
      source: require('../../assets/pat_embrapa.png'),      
  },
  {
      source: require('../../assets/pat_inpasa.png'),
  },
  {
      source: require('../../assets/pat_patria.png'),
  },
  {
      source: require('../../assets/pat_sinop.png'),
  },
  {
      source: require('../../assets/pat_aprosoja.png'),
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

function Main({navigation }) {
  
  const [devs, setDevs] = useState([]);
  const [currentRegion, setCurrentRegion ] = useState(null);
  const [techs, setTechs] = useState('');
  
  useEffect(() =>{
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if ( granted ) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
      }
    }

    loadInitialPosition();
  }, []);

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;

    const response = await api.get('/search', {
      params: {
        latitude,
        longitude,
        techs 
      }
    });

    setDevs(response.data.devs);
  }

  function handleRegionChange(region) {
    setCurrentRegion(region);
    console.log(region)

  }

  if(!currentRegion){
    return null;
  }

  return (
  <>
    <View style={ styles.map }>
      <Image style={styles.image} source={require('../../assets/logo_data.png')} />
    </View>

    <View style={styles.container}>
      <Carousel images={images}  />
    </View>
{/* col1 */}
    <View style={styles.searchForm}>
        <TouchableOpacity onPress={() =>{
          navigation.navigate('Atracoes')
        }} style={styles.loadButton}>
          <Image
            style={styles.button}
            source={require('../../assets/btn_programacao.png')}
          />
          <Text>Programação</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{
          navigation.navigate('Expositores')
        }} style={styles.loadButton}>
          <Image
            style={styles.button}
            source={require('../../assets/btn_expositores.png')}
          />
          <Text>Expositores</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{
          navigation.navigate('Planta')
        }} style={styles.loadButton}>
          <Image
            style={styles.button}
            source={require('../../assets/btn_mapa.png')}
          />
          <Text>Mapa</Text>
        </TouchableOpacity>
        
    </View>
    {/* 2 col */}
    <View style={styles.searchForm2}>
        <TouchableOpacity onPress={() =>{
          navigation.navigate('AgrishowDigital')
        }} style={styles.loadButton}>
          <Image
            style={styles.button}
            source={require('../../assets/btn_noticias.png')}
          />
          <Text>Noticias</Text>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={() =>{
          navigation.navigate('Informacoes')
        }} style={styles.loadButton}>
          <Image
            style={styles.button}
            source={require('../../assets/btn_hotel.png')}
          />
          <Text>Hotel</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>{
          navigation.navigate('ComoChegar')
        }} style={styles.loadButton}>
          <Image
            style={styles.button}
            source={require('../../assets/btn_comochegar.png')}
          />
          <Text>Como Chegar</Text>
        </TouchableOpacity>
        
    </View>
    {/* 3 col */}
    <View style={styles.searchForm3}>
        <TouchableOpacity onPress={loadDevs} style={styles.loadButton}>
        <Image
            style={styles.button}
            source={require('../../assets/btn_patrocinadores.png')}
          />
          <Text>Patrocinadores</Text>
        </TouchableOpacity> 

        <TouchableOpacity onPress={() =>{
          navigation.navigate('Duvidas')
        }} style={styles.loadButton}>
          <Image
            style={styles.button}
            source={require('../../assets/btn_duvidas.png')}
          />
          <Text>Dúvidas</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() =>{
          navigation.navigate('Contato')
        }} style={styles.loadButton}>
          <Image
            style={styles.button}
            source={require('../../assets/btn_contato.png')}
          />
          <Text>Contato</Text>
        </TouchableOpacity>       
    </View>
    {/* footer */}
    <View style={styles.footer}>
      <TouchableOpacity onPress={() =>{
          navigation.navigate('Settings')
        }} style={styles.btnfooter}>
        <Image
            style={styles.btn_footer}
            source={require('../../assets/btn_footer_settings.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>{
          navigation.navigate('Expositores')
        }} style={styles.btnfooter}>
        <Image
            style={styles.btn_footer}
            source={require('../../assets/btn_footer_notifications.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>{
          navigation.navigate('Main')
        }} style={styles.btnfooter}>
        <Image
            style={styles.btn_footer}
            source={require('../../assets/btn_footer_baseline.png')}
            onPress={() =>{
              navigation.navigate('../Main')
            }}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>{
          navigation.navigate('Patrocinadores')
        }} style={styles.btnfooter}>
        <Image
            style={styles.btn_footer}
            source={require('../../assets/btn_footer_star.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>{
          navigation.navigate('Contato')
        }} style={styles.btnfooter}>
        <Image
            style={styles.btn_footer}
            source={require('../../assets/btn_footer_contato.png')}
          />
      </TouchableOpacity>
    </View>
  </>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#d1e1e0',
    marginBottom:5,
    marginTop:-30
    // paddingTop: StatusBar.currentHeight,
  },
  scrollContainer: {
    height,
  },
  imageSlide: {
    width:75,
    marginLeft:18,
    height,
  },
  button :{
    width:80,
    height:80,
  },
  footer:{
    backgroundColor: '#317b79',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:15
  },
  btnfooter: {
    flex:1,
    alignItems:'center'
  },
  btn_footer:{
    width:30,
    height:30,
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor:'#fff',
  },

  callout: {
    width: 260,
  },
  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  devBio: {
    color: '#666',
    marginTop: 5,
  },
  devTechs: {
    marginTop: 5,
  },
  searchForm:{
    flex:1,
    left: 20,
    flexDirection: 'row',
  },
  searchForm2:{
    flex:1,
    left: 20,
    flexDirection: 'row',
  },
  searchForm3:{
    flex:1,
    left: 20,
    flexDirection: 'row',
  },
  searchInput:{
    flex: 1,
    height:50,
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 5,

  },
  loadButton:{
    width: 85,
    height: 85,
    borderRadius:45,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:15,
    marginTop:5,
    marginBottom:20,
    marginRight:20,
  },
})

export default Main;