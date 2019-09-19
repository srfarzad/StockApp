import React , {Component} from 'react';
import {View, Text,Button} from 'react-native';
import call from 'react-native-phone-call';

const aliaaaa = {
    number: '9093900003', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
};
var a;

export default class SettingScreen extends Component<Props> {

    render() {


        return (

            <View>

                <Text>

                    SettingScreen

                </Text>

                <Button title='Call' onPress={()=> {

                    call(aliaaaa).catch(console.error)

                }}  />

            </View>

        )
    }

}