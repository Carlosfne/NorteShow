import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

function Atracoes() {
  return <WebView style={{ flex:1 }} source={{ uri: 'https://www.norteshow.com.br//'}} />
}

export default Atracoes;