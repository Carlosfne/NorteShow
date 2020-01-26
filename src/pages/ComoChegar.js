import React, { useState, useEffect } from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';


function ComoChegar({navigation }) {
  // const [currentRegion, setCurrentRegion ] = useState(null);

  // useEffect(() =>{
  //   async function loadInitialPosition() {
  //     const { granted } = await requestPermissionsAsync();

  //     if ( granted ) {
  //       const { coords } = await getCurrentPositionAsync({
  //         enableHighAccuracy: true,
  //       });

  //       const { latitude, longitude } = coords;

  //       setCurrentRegion({
  //         latitude,
  //         longitude,
  //         latitudeDelta: 0.04,
  //         longitudeDelta: 0.04,
  //       })
  //     }
  //   }

  //   loadInitialPosition();
  // }, []);

  // function handleRegionChange(region) {
  //   setCurrentRegion(region);
  //   console.log(region)

  // }

  // if(!currentRegion){
  //   return null;
  // }

  return (
    <>
    <Text> Aqui</Text>
    <View style={styles.container}>
      <MapView  initialRegion={{latitude:-11.831064, longitude:-55.486950, latitudeDelta:0.01, longitudeDelta:0.01}} style={styles.mapStyle}>
        <MapView.Marker
          coordinate={{ latitude: -11.831064, longitude: -55.486950}} />
      </MapView>
    </View> 
    </>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default ComoChegar;

// AIzaSyDveS2u7gNSG__VSZ9OaL3HEOPA951xwbg