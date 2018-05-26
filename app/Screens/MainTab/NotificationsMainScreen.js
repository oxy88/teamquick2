import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Header, Container, Content, Tabs, Tab, Text, Button, Icon } from 'native-base'

import MainHeader from '../../Components/MainHeader'

class NotificationsMainScreen extends React.Component {
    render() {
        return (
            <Container>
                <MainHeader navigation={this.props.navigation}/>
            <Content>
                    <TouchableOpacity style={{flexDirection: "row", borderBottomWidth: 1, margin: 8}}>
                        <View style={{flex: 1}}>
                        <Image source={{ uri: "https://cdn3.iconfinder.com/data/icons/black-easy/512/535106-user_512x512.png" }} style={{width: 50, height: 50}}/>
                        </View>
                        <View style={{flex: 5, justifyContent: 'center'}}>
                            <Text><Text style={{color: "blue"}}>이 사람</Text>이 <Text style={{color: 'blue'}}>나</Text>에게 귓속말을 보냄</Text>
                            <Text style={{fontSize: 12, color: 'gray'}}>2시간 전</Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="more" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", borderBottomWidth: 1, margin: 8}}>
                        <View style={{flex: 1}}>
                        <Image source={{ uri: "https://cdn3.iconfinder.com/data/icons/black-easy/512/535106-user_512x512.png" }} style={{width: 50, height: 50}}/>
                        </View>
                        <View style={{flex: 5, justifyContent: 'center'}}>
                            <Text><Text style={{color: "blue"}}>이 사람</Text>이 <Text style={{color: 'blue'}}>나</Text>에게 귓속말을 보냄</Text>
                            <Text style={{fontSize: 12, color: 'gray'}}>2시간 전</Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="more" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", borderBottomWidth: 1, margin: 8}}>
                        <View style={{flex: 1}}>
                        <Image source={{ uri: "https://cdn3.iconfinder.com/data/icons/black-easy/512/535106-user_512x512.png" }} style={{width: 50, height: 50}}/>
                        </View>
                        <View style={{flex: 5, justifyContent: 'center'}}>
                            <Text><Text style={{color: "blue"}}>이 사람</Text>이 <Text style={{color: 'blue'}}>나</Text>에게 귓속말을 보냄</Text>
                            <Text style={{fontSize: 12, color: 'gray'}}>2시간 전</Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="more" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", borderBottomWidth: 1, margin: 8}}>
                        <View style={{flex: 1}}>
                        <Image source={{ uri: "https://cdn3.iconfinder.com/data/icons/black-easy/512/535106-user_512x512.png" }} style={{width: 50, height: 50}}/>
                        </View>
                        <View style={{flex: 5, justifyContent: 'center'}}>
                            <Text><Text style={{color: "blue"}}>이 사람</Text>이 <Text style={{color: 'blue'}}>나</Text>에게 귓속말을 보냄</Text>
                            <Text style={{fontSize: 12, color: 'gray'}}>2시간 전</Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="more" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection: "row", borderBottomWidth: 1, margin: 8}}>
                        <View style={{flex: 1}}>
                        <Image source={{ uri: "https://cdn3.iconfinder.com/data/icons/black-easy/512/535106-user_512x512.png" }} style={{width: 50, height: 50}}/>
                        </View>
                        <View style={{flex: 5, justifyContent: 'center'}}>
                            <Text><Text style={{color: "blue"}}>이 사람</Text>이 <Text style={{color: 'blue'}}>나</Text>에게 귓속말을 보냄</Text>
                            <Text style={{fontSize: 12, color: 'gray'}}>2시간 전</Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Icon name="more" />
                        </View>
                    </TouchableOpacity>
            </Content>
            </Container>
        )
    }
}

export default NotificationsMainScreen