import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { Content, H1, H2 } from 'native-base'

import CommonHeader from '../../../Components/CommonHeader'

class SelectCategoryScreen extends React.Component {
    render() {
        return (
            <Content>
                <CommonHeader navigation={this.props.navigation} />
                <H1 style={{margin: 10}}>주제 선택</H1>
                <H2 style={{margin: 10}}>게임</H2>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.state.params._setCategory('롤')
                    this.props.navigation.goBack()
                }}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>롤</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.state.params._setCategory('배그')
                    this.props.navigation.goBack()
                }}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>배그</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.state.params._setCategory('오버워치')
                    this.props.navigation.goBack()
                }}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>오버워치</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.state.params._setCategory('기타 게임')
                    this.props.navigation.goBack()
                }}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>기타 게임</Text>
                </TouchableOpacity>
                <H2 style={{margin: 10}}>스포츠</H2>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.state.params._setCategory('축구/풋살')
                    this.props.navigation.goBack()
                }}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>축구/풋살</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.state.params._setCategory('농구')
                    this.props.navigation.goBack()
                }}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>농구</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.state.params._setCategory('기타 스포츠')
                    this.props.navigation.goBack()
                }}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>기타 스포츠</Text>
                </TouchableOpacity>
                <H2 style={{margin: 10}}>자유 팀</H2>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.state.params._setCategory('자유 팀')
                    this.props.navigation.goBack()
                }}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>자유 팀</Text>
                </TouchableOpacity>
            </Content>
        )
    }
}

export default SelectCategoryScreen