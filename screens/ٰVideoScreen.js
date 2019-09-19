import React , {Component} from 'react';
import {View, Text , StyleSheet} from 'react-native';
import Video from 'react-native-video';
export default class VideoScreen extends Component<Props> {

    render() {


        return (

            <Video source={{uri: "http://androidsupport.ir/video/Linux.mp4"}}   // Can be a URL or a local file.
                   ref={(ref) => {
                       this.player = ref
                   }}                                      // Store reference
                   />

        )
    }



}
var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});