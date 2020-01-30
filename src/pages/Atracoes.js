import React,{Component} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

class Footer extends Component {
  render() {  
      return (
        <View style={styles.footer}>
      <TouchableOpacity  style={styles.btnfooter}>
        <Image
            style={styles.btn_footer}
            source={require('../../assets/btn_footer_settings.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity  style={styles.btnfooter}>
        <Image
            style={styles.btn_footer}
            source={require('../../assets/btn_footer_notifications.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={() =>{
              navigation.navigate('Expositores')
            }} style={styles.btnfooter}>
        <Image
            style={styles.btn_footer}
            source={require('../../assets/btn_footer_baseline.png')}
            
          />
      </TouchableOpacity>
      <TouchableOpacity  style={styles.btnfooter}>
        <Image
            style={styles.btn_footer}
            source={require('../../assets/btn_footer_star.png')}
          />
      </TouchableOpacity>
      <TouchableOpacity  style={styles.btnfooter}>
        <Image
            style={styles.btn_footer}
            source={require('../../assets/btn_footer_contato.png')}
          />
      </TouchableOpacity>
    </View>
      );
  }
}

function Atracoes() {
  return (
    <>
  <WebView style={{ flex:1 }} source={{ uri: 'https://www.norteshow.com.br//'}} />
  {/* <Footer /> */}
  </>
  )
}

const styles = StyleSheet.create({
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
})

export default Atracoes;