import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

export default (props) => (
<View style={style.container}>
    <Text style={style.title} >{props.title}</Text>
    {props.children}
</View>
)

const style = StyleSheet.create({
    container: {
        paddingVertical: 10,
        flex: 1
    },
    title: {
        color: '#4c4c4c',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
        marginLeft: 8
    }
})