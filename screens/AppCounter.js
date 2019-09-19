import React , {Component} from 'react';
import {View, Text , Button,ScrollView,FlatList,Image} from 'react-native';

export default class AppCounter extends Component<Props> {

    constructor(props){
        super(props)

        this.state= {
            counter : 0,
        }

    }

    componentDidMount() {

    }


    increase (){

        this.setState({counter : this.state.counter + 1})

    }

    decrease () {
        this.setState({counter : this.state.counter - 1})
    }


    render() {


        return (

            <ScrollView>


                <View style={{flex: 1 , justifyContent: 'center', alignItems: 'center', }}>


                    <Button title = "+"  onPress={()=> {

                        this.increase()

                    }} />

                    <Text>

                        {this.state.counter}

                    </Text>


                    <Button title = "-" onPress={()=> {

                        this.decrease()

                    }}  />

                </View>


                <FlatList

                    data={[

                        {key : 'ali'},
                        {key : 'maryam'},
                        {key : 'ali'},
                        {key : 'ali'},
                        {key : 'ali'},
                        {key : 'ali'},

                    ]}
                    renderItem={({item}) =>  <Text> {item.key} </Text> }

                />


                <Text>
                    The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).The ScrollView is a generic scrolling container that can host multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).

                </Text>


            </ScrollView>



        )
    }

}