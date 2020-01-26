import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { WebView } from 'react-native-webview';
import { MaterialIcons } from '@expo/vector-icons';
import { Linking } from 'expo';

async function openUrl(){
  // openURL('https://www.facebook.com/norteshowmt/');
  Linking.openURL('https://www.facebook.com/norteshowmt/').catch((err) => console.error('An error occurred', err));
}

function Informacoes() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Norte Show 2020</Text>
      <Text style={ styles.subtitle }>Sinop, Mato Grosso
O maior polo de desenvolvimento da Região Norte de Mato Grosso receberá a segunda edição do evento que busca inovar o campo. Sinop com 44 anos de fundação, mais de 170 mil habitantes e crescimento acima da média nacional, é a cidade perfeita para recebê-lo.
ENTRE EM CONTATO PELO TELEFONE (65) 98116-1629</Text>
      {/* <WebView style={{ flex:1 }} source={{ uri: 'https://www.norteshow.com.br/'}} /> */}
      {/* <Text style={ styles.title }>https://www.norteshow.com.br/</Text> */}
      <Text style={ styles.title }>Redes Sociais</Text>
      <MaterialIcons name="date-range" size={30} color="#fff"/>
        <Text
          onClick={openUrl}
        >Lindaskdaskdjkasjdkas</Text>
        
      <MaterialIcons name="date-range" size={30} color="#fff"/><Text>Linkedin.com</Text>
      <MaterialIcons name="date-range" size={30} color="#fff"/><Text>flickr.com</Text>
      <MaterialIcons name="date-range" size={30} color="#fff"/><Text>youtube.com</Text>
      <MaterialIcons name="date-range" size={30} color="#fff"/><Text>https://www.instagram.com/norteshow/</Text>

      
    </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  title: {
    color:'#000',
    fontSize: 24,
    marginTop:5,
    marginLeft:100
  },
  subtitle: {
    fontSize:18
  }
})
export default Informacoes;