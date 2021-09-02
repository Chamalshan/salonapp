
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import LoadingScreen from './app/Screens/LoadingScreen';
import Login from "./app/Screens/LoginScreen";
import WelcomeScreen from './app/Screens/WelcomeScreen';
import SelectScreen from './app/Screens/SelectScreen';
import CustReg from './app/Screens/CustReg';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar 
      backgroundColor="#fff"
      barStyle="light-content"
      />
      <CustReg/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#EFE5DA",
    //alignItems:"center",
    //justifyContent:"center"
    paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
  },
});
