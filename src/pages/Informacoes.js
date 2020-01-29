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
    <WebView style={{ flex:1 }} source={{ uri: 'https://www.google.com.br/travel/hotels/entity/CgoIg4aTm86ZyM9lEAE/prices?g2lb=2502405%2C2502548%2C4208993%2C4254308%2C4258168%2C4260007%2C4270442%2C4271059%2C4274032%2C4291318%2C4305595%2C4308216%2C4315873%2C4317915%2C4326764%2C4328159%2C4329288%2C4330113%2C4338119%2C4338438%2C4340162%2C4340390%2C4270859%2C4284970%2C4291517%2C4292955%2C4316256&hl=pt-BR&gl=br&un=1&rp=EIOGk5vOmcjPZTgCQABIAQ&ictx=1&ved=2ahUKEwjppZ7D9KPnAhW7LLkGHdvIB-AQjLsCKAAwD3oECCYQAQ&hrf=IgNCUkwqFgoHCOQPEAEYHRIHCOQPEAEYHhgBKACCASUweDkzYTc3ZmZlYWJmY2FjNTk6MHg2NTlmMjBjY2UzNjRjMzAzmgEnGiUweDkzYTc3ZmZlYWJmY2FjNTk6MHg2NTlmMjBjY2UzNjRjMzAz'}} />
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