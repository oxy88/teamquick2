import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Container, Content, Button, Text, List, ListItem, Thumbnail, Body } from 'native-base'

import CommonHeader from '../../../Components/CommonHeader'

class DirectMessageListScreen extends React.Component {
    render() {
        return (
            <Container>
                <CommonHeader navigation={this.props.navigation} title="귓속말"/>
                <Content>
                <List>
                    <ListItem onPress={() => this.props.navigation.navigate('DirectMessage')}>
                    <Thumbnail size={80} source={{ uri: "https://cdn3.iconfinder.com/data/icons/black-easy/512/535106-user_512x512.png" }} />
                    <Body>
                        <Text>유저 이름</Text>
                        <Text note>마지막 채팅 내용</Text>
                    </Body>
                    </ListItem>
                    
                    <ListItem onPress={() => this.props.navigation.navigate('DirectMessage')}>
                    <Thumbnail size={80} source={{ uri: "https://cdn3.iconfinder.com/data/icons/black-easy/512/535106-user_512x512.png" }} />
                    <Body>
                        <Text>유저 이름</Text>
                        <Text note>마지막 채팅 내용</Text>
                    </Body>
                    </ListItem>
                    <ListItem onPress={() => this.props.navigation.navigate('DirectMessage')}>
                    <Thumbnail size={80} source={{ uri: "https://cdn3.iconfinder.com/data/icons/black-easy/512/535106-user_512x512.png" }} />
                    <Body>
                        <Text>유저 이름</Text>
                        <Text note>마지막 채팅 내용</Text>
                    </Body>
                    </ListItem>
                </List>
                </Content>
            </Container>
        )
    }
}

export default DirectMessageListScreen