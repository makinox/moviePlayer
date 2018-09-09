import React from 'react'
import { View, StyleSheet } from 'react-native'

export default (props) => (
    <View style={style.container}>
        <View style={style.video}>
            {props.children}
        </View>
    </View>
)

const style = StyleSheet.create({
    container: {
        paddingTop: '56.25%'
    },
    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor: 'black'
    }
})