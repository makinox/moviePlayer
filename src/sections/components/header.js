import React from 'react'
import { View, Image, StyleSheet, SafeAreaView} from 'react-native'

export default (props) => (
        <View>
            <SafeAreaView>
                <View style={style.container}>
                    <Image 
                        source={require('./../../../assets/logo.png')}
                        style={style.logo}
                    />
                    <View style={style.right}>
                        {props.children}
                    </View>
                </View>
            </SafeAreaView>
        </View>
)

const style = StyleSheet.create({
    logo: {
        width: 80,
        height: 26,
        resizeMode: 'contain'
    },
    container:{
        padding: 22,
        flexDirection: 'row'
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})