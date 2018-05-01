import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Header, Container, Content, Tabs, Tab, Text, Button } from 'native-base'

import MainHeader from '../../Components/MainHeader'

class NotificationsMainScreen extends React.Component {
    render() {
        return (
            <Content>
                <MainHeader navigation={this.props.navigation}/>
                    <TouchableOpacity 
                    style={{width: "90%", height: 50, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>사람1한테 귓속말왔음 : "안녕안녕"</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{width: "90%", height: 50, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>머시기 팀에서 초대</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{width: "90%", height: 50, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>머시기 이벤트에서 초대</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{width: "90%", height: 50, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>머시머시 이벤트에서 초대</Text>
                    </TouchableOpacity>
            </Content>
        )
    }
}

export default NotificationsMainScreen