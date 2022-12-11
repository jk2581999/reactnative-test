import React from 'react';
import {ImageBackground,StyleSheet,View} from 'react-native';

export const BackgroundImage = (props) => {
    const styles = makeStyles();
    return(
        <View style={styles.container}>
        <ImageBackground 
            source={require('../assets/back-image.png')}
            resizeMode="stretch"
            style={[styles.imgBackgroundStyles,props.style]}
        >
            {props.children}
        </ImageBackground>
        </View>
    )
}
const makeStyles = () => StyleSheet.create({
    container:{
        flex:1,
    },
    imgBackgroundStyles:{
        height:287,
        flex:1,
        justifyContent:'center'
    }
})