import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
function LoadingScreen(props) {
    return (
    <View style={styles.container}>
        <ImageBackground style={styles.flower}
        source={require("../assets/Flower.png")}
        />
    </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EFE5DA',
    },
    flower:{
        width:216,
        height:213,
    }
})

export default LoadingScreen;
