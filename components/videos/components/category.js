import React from 'react'
import {StyleSheet, Text, ImageBackground} from 'react-native'

export default (props) => (
    <ImageBackground style={style.wrapper} source={{uri: props.background_image}}>
        <Text style={style.genre}>{props.genres[0]}</Text>
    </ImageBackground>
)

const style = StyleSheet.create({
    wrapper: {
        width: 250,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    genre: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0,0,0, 0.75)',
        textShadowOffset: {
            width: 2,
            height: 2
        },
        textShadowRadius: 10
    }
})