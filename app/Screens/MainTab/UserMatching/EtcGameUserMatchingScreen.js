import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, Content, Text } from 'native-base'
import CommonHeader from '../../../Components/CommonHeader'

class EtcGameUserMatchingScreen extends React.Component {
    render() {
        return (
            <Container>
                <CommonHeader navigation={this.props.navigation} title="기타 게임" />
            <Content>
                <TouchableOpacity
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>클래시로얄 개인전 같은 느낌</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>철권 개인전 같은 느낌</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>도타2 개인전 같은 느낌</Text>
                </TouchableOpacity>
            </Content>
            </Container>
        )
    }
}

export default EtcGameUserMatchingScreen