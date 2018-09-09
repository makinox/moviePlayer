import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default (props) => (
    <View style={styles.container}>
        <Text style={styles.text}>{props.text}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 10
    }, text: {
        fontSize: 16
    }
})