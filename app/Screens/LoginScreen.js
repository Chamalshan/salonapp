import React from 'react';
import { 
    ImageBackground,
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native';

import Logo from "../Components/Logo";
import Form from "../Components/Form";
import react from 'react';

export default class Login extends react.Component {
  render(){

    return (
      <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
      <View >
        <Logo/>
        <Form type="Login"/>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Are you a new user?</Text>
          <TouchableOpacity>
            <Text style={styles.signupBtn}>Sign Up</Text>
          </TouchableOpacity>        
        </View>
      </View>
      </ImageBackground>
    );
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor:'#EFE5DA',
      alignItems:"center",
      justifyContent:"center"
    },
    signupTextCont:{
      flexGrow: 1,
      alignItems:"flex-end",
      justifyContent:"center",
      marginVertical:16,
      flexDirection:'row'
    },
    signupText:{
      color:'#3A292A',
      fontSize:18
    },
    signupBtn:{
      color:'#745B5F',
      fontSize:18,
      fontWeight:'700'
    },

});