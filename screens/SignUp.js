import React , {Component} from 'react';
import {View,Image} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Accordion,ActionSheet,Badge,Card, CardItem,Thumbnail,Fab,Switch ,ListItem } from 'native-base';


const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

export default class SignUp extends Component<Props> {


    static navigationOptions = {
        header: null ,
    };

    constructor(props) {
        super(props)
        this.state = {
            active: false
        };
    }

    render() {


        return (


            <Container>

                <Header>

                    <Left>

                        <Button transparent>
                            <Icon name='menu' />
                        </Button>


                    </Left>

                    <Body>

                    <Title>Header</Title>

                    </Body>

                </Header>

                <Content>

                    <Text>
                        This is Content Section
                    </Text>

                    <Accordion dataArray={dataArray} expanded={0}/>


                    <Badge success>

                        <Text> 4 </Text>

                    </Badge>

                    <Button small block rounded success>

                        <Text> Hi React </Text>
                        <Icon name='arrow-forward' />

                    </Button>


                    <Card>

                        <CardItem>

                            <Text>
                                SAMPLE TEXT super constructor return
                            </Text>

                        </CardItem>

                        <CardItem>
                            <Icon active name="logo-googleplus" />
                            <Text>Google Plus</Text>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>



                    </Card>



                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{uri: 'http://androidsupport.ir/market/images/splash1244_xl_fa.jpg'}} />
                                <Body>
                                <Text>NativeBase</Text>
                                <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{uri: 'http://androidsupport.ir/market/images/splash1244_xl_fa.jpg'}} style={{height: 200, width: null, flex: 1}}/>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>12 Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                            <Button transparent>
                                <Icon active name="chatbubbles" />
                                <Text>4 Comments</Text>
                            </Button>
                            </Body>
                            <Right>
                                <Text>11h ago</Text>
                            </Right>
                        </CardItem>
                    </Card>


                    <Fab
                        active={this.state.active}
                        direction="up"
                        containerStyle={{ }}
                        style={{ backgroundColor: '#5067FF' }}
                        position="bottomRight"
                        onPress={() => this.setState({ active: !this.state.active })}>
                        <Icon name="share" />
                        <Button style={{ backgroundColor: '#34A34F' }}>
                            <Icon name="logo-whatsapp" />
                        </Button>
                        <Button style={{ backgroundColor: '#3B5998' }}>
                            <Icon name="logo-facebook" />
                        </Button>
                        <Button disabled style={{ backgroundColor: '#DD5144' }}>
                            <Icon name="mail" />
                        </Button>
                    </Fab>


                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#FF9501" }}>
                                <Icon active name="airplane" />
                            </Button>
                        </Left>
                        <Body>
                        <Text>Airplane Mode</Text>
                        </Body>
                        <Right>
                            <Switch value={true} />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="wifi" />
                            </Button>
                        </Left>
                        <Body>
                        <Text>Wi-Fi</Text>
                        </Body>
                        <Right>
                            <Text>GeekyAnts</Text>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>
                    <ListItem icon>
                        <Left>
                            <Button style={{ backgroundColor: "#007AFF" }}>
                                <Icon active name="bluetooth" />
                            </Button>
                        </Left>
                        <Body>
                        <Text>Bluetooth</Text>
                        </Body>
                        <Right>
                            <Text>On</Text>
                            <Icon active name="arrow-forward" />
                        </Right>
                    </ListItem>



                </Content>

                <Footer>

                    <FooterTab >

                        <Button active badge vertical>

                            <Badge ><Text>51</Text></Badge>
                            <Icon active name="navigate" />

                            <Text>

                                Footer

                            </Text>


                        </Button>

                    </FooterTab>


                    <FooterTab >

                        <Button vertical>
                            <Icon name="ios-camera" />
                            <Text>

                                Footer 2

                            </Text>


                        </Button>

                    </FooterTab>

                </Footer>


            </Container>

        )
    }

}