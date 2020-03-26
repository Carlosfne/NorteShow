import React, {useEffect, useState} from 'react';
import { ScrollView, Text, Button, FlatList, StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import moment from 'moment'

import api from '../services/api'

const styles = StyleSheet.create({
  list:{
    flex:1,
    backgroundColor:'#fff',
    fontSize: 20,
    fontWeight:'bold',
    borderRadius:5,
    padding:20,
    margin:15
  },
  div:{
    width:'100%',
    height:'100%',
    flex:1
  },
  title:{
    textAlign:'center',
    textTransform:'uppercase',
    marginBottom:5,
    color:'#8a8661',
    fontWeight:'bold'
    // justifyContent:'space-between' 
  },
  description: {
    textAlign:'justify', 
  },
  date: {
    textTransform:'lowercase',
    color:'#6f6f6f'
  }
})

function Expositores() {
  const [ noticias, setNoticias ] = useState([])
  
  useEffect(() => {
   
    loadNoticias()
    
  }, [])
  async function loadNoticias() {
    const response = await api.get('/noticias')
    
    setNoticias(response.data)
    console.log(response.data)

    const teste = noticias.map( noticia => (
      <Button>{noticia.description}</Button>
     ))
    
  }
  return (
    <ScrollView style={styles.div} >      
        <View>
          {
            noticias.map(noticia =>(
              <>
            <View key={noticia._id} style={styles.list}>
            <Text style={styles.title}>{noticia.title} -  
              <Text style={styles.date}>Criado em {moment(noticia.createdAt).format('DD/MM/YYYY')}
              </Text>
            </Text>
              <Text style={styles.description}>{noticia.description}</Text>
            </View>
            </>
            ))
          }
        </View>
        
      </ScrollView> 
  )
}

export default Expositores;