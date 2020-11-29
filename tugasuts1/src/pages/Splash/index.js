import React, { useEffect, Component } from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';

import { BgSplash, Logo } from '../../assets';

// props navigation didapat dari NavigationContainer App.js
const Splash = ({navigation}) => {
    useEffect (() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 2000)
    })
    return(
        <ImageBackground 
        source={BgSplash}
        style={{height: '100%', width: '100%'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            </View>

        </ImageBackground>
    )
}

export default Splash;