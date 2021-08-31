
import React from 'react';
import ReactNative, { ImageBackground,StyleSheet,Image,Text,StatusBar,fontFamily} from 'react-native';
import * as Font from 'expo-font';

let customFonts = {
    'dancing': require('../assets/fonts/dancing.ttf'),
  };

export default class WelcomeScreen extends React.Component{
    state = {
        fontsLoaded: false,
      };
      async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this._loadFontsAsync();
      }
    render(){
        if (this.state.fontsLoaded) {
        return (
            <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
                <Image style={styles.girl}
                source={require('../assets/girl.png')}/>
                <Text style={styles.text1}>
                Book your favorite 
                {'\n'}
                Hair Style
                </Text>
                
            </ImageBackground>
        );
      }else {
        return null;
      }
   }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EFE5DA',

    },
    girl:{

        top:'20%',
        left:'20%',
    },
    text1:{
        fontFamily:'dancing',
        fontWeight:'bold',
        fontSize:30,
        top:500,

        color:"#3A292A",
        position:"absolute",
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
        paddingLeft: 10,
    },
})
