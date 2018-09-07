import React, { Component } from 'react'
import { Video, ScreenOrientation, Constants } from 'expo'
import { StyleSheet } from 'react-native'
import Layout from './../components/videoLayout'
import VideoPlayer from '@expo/videoplayer';

export default class extends Component {
    render() {
        return (
        <Layout>
                <VideoPlayer
                    videoProps={{
                        resizeMode: "contain",
                        source: { uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8' },
                        isMuted: false
                    }}
                    switchToLandscape={()=> ScreenOrientation.allow(ScreenOrientation.Orientation.LANDSCAPE)}
                    switchToPortrait={()=> ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT)}        
                    isPortrait={true}
                    playFromPositionMillis={0}
                    style={style.video}
                />
            </Layout>
        )
    }
}

const style = StyleSheet.create({
    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        paddingTop: Constants.statusBarHeight,
        top: 0
    }
})