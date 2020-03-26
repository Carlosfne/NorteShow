import React, {useEffect, useState} from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image, ScrollView } from 'react-native';
import img from '../../assets/pat_embrapa.png'

import api from '../services/api'

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

const styles = StyleSheet.create({
  list:{
    flex:1,
    alignItems:'center',    
  },
  imageSlide:{
    margin:15
  }
})

function Patrocinadores() {
  const [ patrocinadores, setPatrocinadores ] = useState([])
  
  useEffect(() => {
   
    loadNoticias()
    
  }, [])
  async function loadNoticias() {
    const response = await api.get('/patrocinadores')
    
    setPatrocinadores(response.data)
    console.log(response.data)

    
    
  }
  return (
    <ScrollView >
      <View style={styles.list}>
        {images.map((image, i) => (
            <Image style={styles.imageSlide} source={image.source} key={i} />
        ))}
      </View>
    </ScrollView> 

  )
}

export default Patrocinadores;