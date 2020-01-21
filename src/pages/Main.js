import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../services/api';

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
    {/* <MapView onRegionChangeComplete={handleRegionChange} initialRegion={currentRegion} style={ styles.map } >
      {devs.map(dev =>(
        <Marker 
          key={dev._id}
          coordinate={{ 
            longitude: dev.location.coordinates[0],
            latitude: dev.location.coordinates[1],
           }} >
        <Image style={styles.avatar} source={{ uri: dev.avatar_url }} />
        <Callout onPress={() =>{
          navigation.navigate('Profile', { github_username: dev.github_username })
        }}>
          <View style={styles.callout}>
            <Text style={styles.devName}>{dev.name}</Text>
            <Text style={styles.devBio}>{dev.bio}</Text>
            <Text style={styles.devTechs}>{dev.techs.join(', ')}</Text>
          </View>
        </Callout>
      </Marker>
      ))}
    </MapView> */}
    <View style={ styles.map }>
      <Image style={styles.image} source={require('../../assets/logo_norteshow.png')} />
    </View>
    <View style={styles.searchForm}>
        {/* <TextInput 
          style={styles.searchInput}
          placeholder='Buscar caminhões por placa...'
          placeholderTextColor='#999'
          autoCapitalize='words'
          autoCorrect={false}
          value={techs}
          onChangeText={setTechs}
          // onChangeText={text => setTechs(text)}
        /> */}
        <TouchableOpacity onPress={() =>{
          navigation.navigate('Atracoes')
        }} style={styles.loadButton}>
          <MaterialIcons name="date-range" size={30} color="#fff"/>        
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{
          navigation.navigate('Expositores')
        }} style={styles.loadButton}>
          <MaterialIcons name="people" size={30} color="#fff"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{
          navigation.navigate('Planta')
        }} style={styles.loadButton}>
          <MaterialIcons name="map" size={30} color="#fff"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{
          navigation.navigate('AgrishowDigital')
        }} style={styles.loadButton}>
          <MaterialIcons name="view-agenda" size={30} color="#fff"/>
        </TouchableOpacity>
    </View>
    <View style={styles.searchForm2}>
        <TouchableOpacity onPress={() =>{
          navigation.navigate('ComoChegar')
        }} style={styles.loadButton}>
          <MaterialIcons name="my-location" size={30} color="#fff"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{
          navigation.navigate('Informacoes')
        }} style={styles.loadButton}>
          <MaterialIcons name="info" size={30} color="#fff"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{
          navigation.navigate('Duvidas')
        }} style={styles.loadButton}>
          <MaterialIcons name="contact-support" size={30} color="#fff"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>{
          navigation.navigate('Contato')
        }} style={styles.loadButton}>
          <MaterialIcons name="email" size={30} color="#fff"/>
        </TouchableOpacity>
    </View>
    <View style={styles.searchForm3}>
        <TouchableOpacity onPress={loadDevs} style={styles.loadButton}>
          <MaterialIcons name="star" size={30} color="#fff"/>
        </TouchableOpacity>        
    </View>
  </>
  )
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
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
    width: 70,
    height: 70,
    backgroundColor: '#27ae60',
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
})

export default Main;