/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {createStackNavigator, createAppContainer , createBottomTabNavigator} from 'react-navigation';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Alert,
    Image,
    Button,
} from 'react-native';


import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SignUp from "./screens/SignUp";
import AppCounter from "./screens/AppCounter";
import SettingScreen from "./screens/SettingScreen";
import CategoryScreen from "./screens/CategoryScreen";

class LoginScreen extends Component<Props> {


    static navigationOptions = {
        title: 'Login Screen',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },

        headerRight: (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
            />
        ),
    };

    render() {

        return (

            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image style={[styles.icon, styles.inputIcon]} source={require('./assets/user.png')}/>
                    <TextInput style={styles.inputs}
                               placeholder="Email"
                               keyboardType="email-address"
                               underlineColorAndroid='transparent'/>
                </View>

                <View style={styles.inputContainer}>
                    <Image style={[styles.icon, styles.inputIcon]} source={require('./assets/pass.png')}/>
                    <TextInput style={styles.inputs}
                               placeholder="Password"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'/>
                </View>

                <TouchableOpacity style={styles.restoreButtonContainer}>
                    <Text>Forgot?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={()=>{

                    this.props.navigation.navigate('Home')

                }} >
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]} onPress={()=>{

                    this.props.navigation.push('SignUp')

                }}>
                    <View style={styles.socialButtonContent}>
                        <Image style={styles.icon} source={require('./assets/user.png')}/>
                        <Text style={styles.loginText}>Continue with facebook</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]} onPress={()=>{

                    this.props.navigation.push('AppCounter')

                }}>
                    <View style={styles.socialButtonContent}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/google/androidL/40/FFFFFF'}}/>
                        <Text style={styles.loginText}>Sign in with google</Text>
                    </View>
                </TouchableOpacity>
            </View>

        )


    }


}


class HomeScreen extends Component<Props> {

    render() {
        return (

            <View style={styles.container}>

                <Text style={ styles.test}>
                    Home
                </Text>

            </View>

        )
    }

}

const TabNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Category : CategoryScreen,
    Settings: SettingScreen,
});

const MainNavigator = createStackNavigator({

    LoginScreen: {
        screen: LoginScreen
    },

    Home: {
        screen: TabNavigator
    } ,

    SignUp : {
        screen : SignUp
    }
    ,AppCounter : {
        screen : AppCounter
    }

});

const App = createAppContainer(MainNavigator);


export default App;


const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B0E0E6',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    icon: {
        width: 30,
        height: 30,
    },
    inputIcon: {
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: '#3498db',
    },
    fabookButton: {
        backgroundColor: "#3b5998",
    },
    googleButton: {
        backgroundColor: "#ff0000",
    },
    loginText: {
        color: 'white',
    },
    restoreButtonContainer: {
        width: 250,
        marginBottom: 15,
        alignItems: 'flex-end'
    },
    socialButtonContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialIcon: {
        color: "#FFFFFF",
        marginRight: 5
    }, test : {
        color: "#ff0000",
        marginLeft : 10,
    },

});

