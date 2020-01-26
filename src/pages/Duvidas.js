import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

function Duvidas() {
  return (
    <>
    <Text style={styles.title}>Dúvidas Frequentes:</Text>
    <Text style={styles.subtitle}>Qual data será realizada a Norte Show?</Text>
    <Text style={styles.text}>Dias: </Text>
    <Text style={styles.subtitle}>Onde será realizada?</Text>
    <Text style={styles.text}> Endereço:Rua João Pedro Moreira de Carvalho, 6.540, CEP 78.551-150 - Sinop - MT</Text>
    <Text style={styles.subtitle}>Qual o valor do ingresso e onde posso comprar?</Text>
    <Text style={styles.text}> Vendas de ingressos na... </Text>
    <Text style={styles.subtitle}>Qual a idade minima para entrar na feira?</Text>
    <Text style={styles.text}> Não será permitida a entrada de menores de 14 anos desacompanhados pelos pais e/ou responsáveis.
    De 5 a 11 anos e maior de 60 anos pagam meia entrada, acima de 12 anos pagam valor integral </Text>
    
    </>
  )
}

const styles = StyleSheet.create({
  title:{
    fontSize:24,
    fontWeight:'bold',
    marginLeft:100
  },
  subtitle: {
    fontSize:20,
    fontWeight:'bold'
  },
  text: {
    fontSize:18,
    color:'#666'
  }
})

export default Duvidas;