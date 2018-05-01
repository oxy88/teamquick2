import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Container, H1, H2, Content, Header, Left, Button, Icon, Body, Right, Title } from 'native-base'

import CommonHeader from '../../../Components/CommonHeader'

class UserMatchingScreen extends React.Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.dispatch({ type: 'Navigation/BACK'})}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>개인 매칭</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                <H2 style={{margin: 10}}>게임</H2>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('LolUserMatching')}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>롤</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('PubgUserMatching')}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>배그</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('OverwatchUserMatching')}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>오버워치</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('EtcGameUserMatching')}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>기타 게임</Text>
                </TouchableOpacity>
                <H2 style={{margin: 10}}>스포츠</H2>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('SoccerUserMatching')}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>축구/풋살</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('BasketballUserMatching')}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>농구</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('EtcSportsUserMatching')}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>기타 스포츠</Text>
                </TouchableOpacity>
                <H2 style={{margin: 10}}>기타 매칭</H2>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('EtcUserMatching')}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>기타 매칭</Text>
                </TouchableOpacity>
                </Content>
            </Container>
        )
    }
}

export default UserMatchingScreen
