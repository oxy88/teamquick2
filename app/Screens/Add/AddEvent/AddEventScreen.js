import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { Content, H1, H2 } from 'native-base'

class AddEventScreen extends React.Component {
    render() {
        return (
            <Content>
                <H1>어떤 이벤트?</H1>
                <H2 style={{margin: 10}}>게임</H2>
                <TouchableOpacity style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>롤</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>배그</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>오버워치</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>기타 게임</Text>
                </TouchableOpacity>
                <H2 style={{margin: 10}}>스포츠</H2>
                <TouchableOpacity style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>축구/풋살</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>농구</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>기타 스포츠</Text>
                </TouchableOpacity>
                <H2 style={{margin: 10}}>기타이벤트</H2>
                <TouchableOpacity style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>기타 이벤트</Text>
                </TouchableOpacity>
            </Content>
        )
    }
}

export default AddEventScreen