import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

function Contato() {
  return (
    <>
    <View />
    <Text style={styles.title} >Entre em contato:</Text>
    <Text style={styles.label} >Rua João Pedro Moreira de Carvalho, 6.540, CEP 78.551-150 - Sinop - MT</Text>
    <Text style={styles.label} >coordenacao@norteshow.com.br</Text>
    <Text style={styles.label} >Tel: 66. 3520.4100</Text>
    
    </>
  )
}

const styles = StyleSheet.create({
  title:{
    fontSize:24,
    fontWeight:'bold'
  },
  label:{
    fontSize:18,
  }
})

export default Contato;