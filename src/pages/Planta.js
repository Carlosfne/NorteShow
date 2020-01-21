import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

function Expositores() {
  return <WebView style={{ flex:1 }} source={{ uri: 'https://drive.google.com/open?id=0B7DZdGrd5LrRemNXT25PTGRTeTg'}} />
}

export default Expositores;