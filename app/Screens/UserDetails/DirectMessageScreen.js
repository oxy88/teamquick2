import React from 'react'
import { View } from 'react-native'
import { Container, Content, Text, Input } from 'native-base'

import CommonHeader from '../../Components/CommonHeader'

class DirectMessageScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            chats: [
                {
                    id: 0,
                    user: "notme",
                    text: "남이 쓴 채팅"
                },
                {
                    id: 1,
                    user: "me",
                    text: "내가 쓴 채팅"
                },
                {
                    id: 2,
                    user: "notme",
                    text: "남이 쓴 채팅"
                },
                {
                    id: 3,
                    user: "me",
                    text: "내가 쓴 채팅"
                },
            ]
        }
    }

    render() {

        return (
            <Container>
                <CommonHeader title="상대편 이름" navigation={this.props.navigation} />

                <Content>
                    {this.state.chats.map(chat => {
                        return (
                            <View key={chat.id}>
                                <Text style={chat.user === "me" ? {textAlign: "right"} : null}>{chat.text}</Text>
                            </View>
                        )
                    })}
                </Content>
                <Input 
                    placeholder="메시지를 입력하세요"
                    style={{backgroundColor: 'white', position: 'absolute', bottom: 0, left: 0, right: 0}}
                    value={this.state.text}
                    onChangeText={(text) => this.setState({ text })}
                    onSubmitEditing={() => {
                        const obj = {
                            id: this.state.chats.length,
                            user: "me",
                            text: this.state.text
                        }

                        this.setState({
                            chats: this.state.chats.concat([ obj ]),
                            text: ""
                        })
                    }}
                />
            </Container>
        )
    }
}

export default DirectMessageScreen