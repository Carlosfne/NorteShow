import React, { Component } from 'react'
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native'

const Footer = () => {
    return (
      <View style={styles.footer}>
      <TouchableOpacity onPress={loadDevs} style={styles.btnfooter}>
        <Image
            style={styles.btn_footer}
            source={require('../../../assets/btn_footer_settings.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={loadDevs} style={styles.btnfooter}>
        <Image
            style={styles.btn_footer}
            source={require('../../../assets/btn_footer_notifications.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={loadDevs} style={styles.btnfooter}>
        <Image
            style={styles.btn_footer}
            source={require('../../../assets/btn_footer_baseline.png')}
            onPress={() =>{
              navigation.navigate('Main')
            }}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={loadDevs} style={styles.btnfooter}>
        <Image
            style={styles.btn_footer}
            source={require('../../../assets/btn_footer_star.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={loadDevs} style={styles.btnfooter}>
        <Image
            style={styles.btn_footer}
            source={require('../../../assets/btn_footer_contato.png')}
          />
      </TouchableOpacity>
    </View>
    )
  }

  const styles = StyleSheet.create({
    map: {
      flex: 1,
    },
    button :{
      width:74,
      height:74,
    },
    footer:{
      backgroundColor: '#317b79',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      padding:15
    },
    btnfooter: {
      flex:1,
      alignItems:'center'
    },
    btn_footer:{
      width:30,
      height:30,
    },
    avatar: {
      width: 54,
      height: 54,
      borderRadius: 4,
      borderWidth: 4,
      borderColor:'#fff',
    },
  
    callout: {
      width: 260,
    },
    devName: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    devBio: {
      color: '#666',
      marginTop: 5,
    },
    devTechs: {
      marginTop: 5,
    },
    searchForm:{
      flex:1,
      left: 20,
      flexDirection: 'row',
    },
    searchForm2:{
      flex:1,
      left: 20,
      flexDirection: 'row',
    },
    searchForm3:{
      flex:1,
      left: 20,
      flexDirection: 'row',
    },
    searchInput:{
      flex: 1,
      height:50,
      backgroundColor: '#fff',
      color: '#333',
      borderRadius: 25,
      paddingHorizontal: 20,
      fontSize: 16,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: {
        width: 4,
        height: 4,
      },
      elevation: 5,
  
    },
    loadButton:{
      width: 70,
      height: 70,
      borderRadius: 45,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 15,
    },
  })

export default Footer
