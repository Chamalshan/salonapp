import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Platform, StatusBar,Image } from 'react-native';



function LoadingScreen(props) {
    return (
        <ImageBackground style={styles.container} source={require("../assets/bg-01.png")}>
            <Image style={styles.en}
            source={require("../assets/encapture.png")}/>
            <Text style={styles.text1}>
                Loading
            </Text>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EFE5DA',
        alignItems:'center',

    },
    en:{
        width:273,
        height:304,
        position:'absolute',
        top:180,
        
    },
    text1:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:30,
        top:700,

        color:"#3A292A",
        position:"absolute",
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    },
})

export default LoadingScreen;
