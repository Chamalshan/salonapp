import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Platform, StatusBar } from 'react-native';
function LoadingScreen(props) {
    return (
    <View style={styles.container}>
        <ImageBackground style={styles.circle1}
        source={require("../assets/Circle.png")}>
        </ImageBackground>
        <ImageBackground style={styles.flower1}
        source={require("../assets/Flower.png")}/>
        <ImageBackground style={styles.circle2}
        source={require("../assets/Circle.png")}/>
        <ImageBackground style={styles.flower2}
        source={require("../assets/Flower.png")}/>
        <ImageBackground style={styles.f1}
        source={require("../assets/f1.png")}/>
        <ImageBackground style={styles.f2}
        source={require("../assets/f1.png")}>
        </ImageBackground>
        <View>
           <Text style={styles.text1}>
               Loading
           </Text>
        </View>
    </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EFE5DA',
    },
    flower1:{
        width:216,
        height:213,
        top:"-5%",
        left:"-25%",
        position:"absolute",
        
    },
    circle1:{
        width:436,
        height:411,
        top:"0%",
        left:"-60%",
        opacity:0.5,
        position:"absolute",
    },
    circle2:{
        width:436,
        height:411,
        top:"25%",
        left:"60%",
        opacity:0.5,
        position:"absolute",
    },
    flower2:{
        width:216,
        height:213,
        top:"35%",
        left:"70%",
        position:"absolute",
    },
    f1:{
        width:250,
        height:250,
        top:"-10%",
        left:"60%",
        position:"absolute",
        transform:[{rotate:'160deg'}]
    },
    f2:{
        width:303,
        height:297,
        top:"75%",
        left:"-20%",
        position:"absolute",
        transform:[{rotate:'-20deg'}]
    },
    text1:{
        fontFamily:'Roboto',
        fontWeight:'bold',
        fontSize:30,
        top:700,
        left:"38%",
        color:"#3A292A",
        position:"absolute",
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
    },
})

export default LoadingScreen;
