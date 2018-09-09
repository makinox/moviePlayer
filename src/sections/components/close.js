import React from 'react'
import {Text, StyleSheet, TouchableOpacity} from 'react-native'

export default (props) => (
    <TouchableOpacity onPress={props.onPress} style={style.container}>
        <Text style={style.button}>
            X
        </Text>
    </TouchableOpacity>
)

const style = StyleSheet.create({
    button: {
        fontWeight: 'bold',
        color: 'white'
    },
    container: {
        backgroundColor: '#14b739',
        borderRadius: 12,
        width: 25,
        height: 25,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    }
})