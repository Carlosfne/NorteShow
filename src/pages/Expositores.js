import React,{ useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import moment from 'moment'

// 8a8661

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
  const [ expositores, setExpositores ] = useState([])

  useEffect(() => {
    loadExpositores()
  }, [])
  async function loadExpositores(){
    const response = await api.get('/expositores')

    setExpositores(response.data)
  }

  return (
    <ScrollView>
       <View>
          {
            expositores.map(expositor =>(
              <>
            <View style={styles.list}>
            <Text style={styles.title}>{expositor.description} -  
              <Text style={styles.date}>Criado em {moment(expositor.createdAt).format('DD/MM/YYYY')}
              </Text>
            </Text>
            </View>
            </>
            ))
          }
        </View>
    </ScrollView>
  )
}

export default Expositores;