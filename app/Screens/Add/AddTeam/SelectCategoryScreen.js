import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { Container, Content, H1, H2 } from 'native-base'

import CommonHeader from '../../../Components/CommonHeader'

class SelectCategoryScreen extends React.Component {
    render() {
        return (
            <Container>
                <CommonHeader navigation={this.props.navigation} title="팀 주제 선택"/>
            <Content>
                <H2 style={{margin: 10}}>게임</H2>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.state.params._setCategory('LOL')
                    this.props.navigation.goBack()
                }}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>롤</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.state.params._setCategory('PUBG')
                    this.props.navigation.goBack()
                }}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>배그</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.state.params._setCategory('OVERWATCH')
                    this.props.navigation.goBack()
                }}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>오버워치</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.state.params._setCategory('ETC_GAMES')
                    this.props.navigation.goBack()
                }}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>기타 게임</Text>
                </TouchableOpacity>
                <H2 style={{margin: 10}}>스포츠</H2>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.state.params._setCategory('SOCCER')
                    this.props.navigation.goBack()
                }}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>축구/풋살</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.state.params._setCategory('BASKET_BALL')
                    this.props.navigation.goBack()
                }}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>농구</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.state.params._setCategory('ETC_SPORTS')
                    this.props.navigation.goBack()
                }}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>기타 스포츠</Text>
                </TouchableOpacity>
                <H2 style={{margin: 10}}>자유 팀</H2>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.state.params._setCategory('ANY')
                    this.props.navigation.goBack()
                }}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>자유 팀</Text>
                </TouchableOpacity>
            </Content>
            </Container>
        )
    }
}

export default SelectCategoryScreen