import React from 'react'
import { View, TouchableOpacity, TextInput, DatePickerAndroid } from 'react-native'
import { Container, H1, H3, Content, Button, Text, Input, Form, Item } from 'native-base'

import CommonHeader from '../../../Components/CommonHeader'

class AddScrimmageScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: '주제 선택',
            eventType: '유형 선택',
            eventOptions: {},
            date: "2018-05-05"
        }
        this._setCategory = this._setCategory.bind(this)
        this._setEventType = this._setEventType.bind(this)
        this._setEventOptions = this._setEventOptions.bind(this)
    }

    _setCategory(category) {
        this.setState({ category })
    }

    _setEventType(eventType) {
        this.setState({ eventType })
    }

    _setEventOptions(eventOptions) {
        this.setState({ eventOptions })
    }

    render() {
        return (
            <Container>
                <CommonHeader navigation={this.props.navigation} title="연습경기 만들기"/>
            <Content>
                <H3 style={{margin: 10}}>팀 선택</H3>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('SelectCategory', { _setCategory: this._setCategory })}
                    style={{backgroundColor: 'white', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>{this.state.selectedTeam}</Text>
                    </TouchableOpacity>
                <H3 style={{margin: 10}}>위치</H3>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('SelectEventType', { _setEventType: this._setEventType })}
                    style={{backgroundColor: 'white', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>네비게이션으로 연결</Text>
                    </TouchableOpacity>
                <H3 style={{margin: 10}}>시작 시간</H3>
                    <TouchableOpacity 
                    style={{backgroundColor: 'white', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>05/04 18:00</Text>
                    </TouchableOpacity>
                <Button 
                onPress={() => this.props.navigation.navigate('App')}
                block style={{marginTop: 10}}>
                    <Text>만들기</Text>
                </Button>
            </Content>
            </Container>
        )
    }
}

export default AddScrimmageScreen