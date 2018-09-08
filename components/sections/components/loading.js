import React from 'react'
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native'

export default () => (
    <View style={style.container} >
        <Image source={require('./../../../assets/logo.png')} style={style.logo} />
        <ActivityIndicator />
    </View>
)

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 200,
        height: 80,
        resizeMode: 'contain',
        marginBottom: 10,
    }
})