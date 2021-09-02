import React from 'react';
import { 
  ActivityIndicatorBase,
  StyleSheet, 
  Text, 
  TextInput, 
  Image,
  TouchableOpacity, 
  View ,
  StatusBar,
  ImageBackground,
  ScrollView
} from 'react-native';

export default function CustReg() {
    return (
      <ImageBackground style={styles.container}
        source={require('../assets/bg-01.png')}>
        
        <Text style={styles.header}>Register as Customer</Text>
        <Image
          style={{width:100, height:110, marginBottom:10}}
          source={require('../assets/encapture.png')}/>
        <TextInput style={styles.textinput} placeholder="First Name" 
        underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.textinput} placeholder="Last Name" 
        underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.textinput} placeholder="Email" 
        underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.textinput} placeholder="Gender" 
        underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.textinput} placeholder="Birthday" 
        underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.textinput} placeholder="Mobile Number" 
        underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.textinput} placeholder="Address" 
        underlineColorAndroid={'transparent'}/>
        <TextInput style={styles.textinput} placeholder="Password" 
        underlineColorAndroid={'transparent'} secureTextEntry/>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.btnTxt}>
                Sign Up
            </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor:"#EFE5DA",
      justifyContent:'center',
      alignItems:'center',
    },
    header:{
      fontFamily:'Roboto',
      fontWeight:'bold',
      fontSize:30,
      top:'-4%',
      color:"#3A292A",
      position:"relative",
      paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
      paddingLeft: 10,
    },
    textinput:{
      width:300,
      height:40,
      backgroundColor:'#fff',
      borderRadius:25,
      paddingHorizontal:16,
      fontSize:16,
      color:'#3A292A',
      elevation:5,
      shadowColor:'#000',
      shadowOffset:{
        width:1,
        height:1,
      },
      shadowRadius:100,
      marginVertical:10,
      marginHorizontal:10,
    },
    btnTxt:{
      fontSize:20,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    },
    button:{
      backgroundColor:'#3A292A',   
      borderRadius:25,
      width:200,
      marginVertical:10,
      paddingVertical:12,
      elevation:5,
      shadowColor:'#000',
      shadowOffset:{
        width:1,
        height:1,
      },
      shadowRadius:100,
      marginVertical:10,
      marginHorizontal:10,
      position:'absolute',
      top:'95%',
      //left:'40%',
    },
});