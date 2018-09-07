import React from 'react'
import {Text, View, StyleSheet} from 'react-native'

export default (props) => (
    <View style={[
        styles.separator,
        {
            borderTopColor: props.color || '#eaeaea'
        }
    ]}>
    </View>
)

const styles = StyleSheet.create({
    separator: {
        borderTopWidth: 1
    }
})