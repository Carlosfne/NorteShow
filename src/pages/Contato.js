import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
  
} from 'react-native';
import { TextInput } from 'react-native-paper';
import Constants from 'expo-constants';

function Separator() {
  return <View style={styles.separator} />;
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          Contatar com os organizadores do evento.
        </Text>
        <TextInput
          label='Nome'
          style={styles.txtinput}
          placeholder='Nome'
          onChangeText={(nome) => this.setState({nome})}          
        />
        <TextInput
          label='E-mail'
          style={styles.txtinput}
          placeholder='E-mail'
          onChangeText={(email) => this.setState({email})}
        />
        <TextInput
          label='Mensagem'
          style={styles.txtArea}
          placeholder='Mensagem'
          onChangeText={(mensagem) => this.setState({mensagem})}
        />
        <Button
          title="Enviar"
          onPress={() => Alert.alert('Email enviado com sucesso!')}
        />
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
  txtinput: {
    marginBottom:5,
    backgroundColor:'transparent'
  },
  txtArea :{
    backgroundColor:'transparent',
    height:150
  }
});
