import React , {Component} from 'react';
import {View, Text, Button} from 'react-native';
import firebase from 'react-native-firebase';


export default class FirebaseScreen extends Component<Props> {

    create () {

        firebase.auth().createUserWithEmailAndPassword("sr.farzad@gmail.com", "N@vin1398Droid")
            .then((user)=> {

               // alert(user)
                console.log(user)

            }).catch((error)=> {
                console.log(error)
        })

    }

    login () {
        firebase.auth().signInWithEmailAndPassword("sr.farzad@gmail.com", "N@vin1398Droid")
            .then((user)=> {

            }).catch((error)=> {

        })
    }


    render() {


        return (

            <View>


                <Button  title='SignUp' onPress={()=> {

                this.create()

                }} />


                <Button  title='SignIN' onPress={()=> {

                    this.login()

                }} />


            </View>

        )
    }

}