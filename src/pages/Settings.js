import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image
} from 'react-native';
import Constants from 'expo-constants';

function Separator() {
  return <View style={styles.separator} />;
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          Aqui vamos mostrar-lhe brevemente as informações que você pode visualizar e quais ações podem ser realizadas
          com o aplicativo.
        </Text>
        <Image
            style={styles.button}
            source={require('../../assets/btn_mapa.png')}
          /><Text style={styles.txt}>Mapa</Text>
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          Você pode ver no mapa onde se realiza o evento.
        </Text>
        <Image
            style={styles.button}
            source={require('../../assets/btn_contato.png')}
          /><Text style={{marginLeft:70}}>Contato e organização do evento</Text>
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          Digite seu nome, e-mail e a sugestão ou comentário que você deseja enviar para os
          organizadores do evento.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button:{
    width:35,
    height:35,
    marginLeft:150
  },
  txt:{
    marginLeft:150
  }
});
