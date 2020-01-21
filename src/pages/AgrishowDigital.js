import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

function Expositores() {
  return <WebView style={{ flex:1 }} source={{ uri: 'https://digital.agrishow.com.br'}} />
}

export default Expositores;