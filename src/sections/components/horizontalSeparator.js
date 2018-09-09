import React from 'react'
import {View, StyleSheet} from 'react-native'
export default () => (
    <View style={style.separator} />
)

const style = StyleSheet.create({
    separator: {
        flex: 1,
        marginHorizontal: 5
    }
})