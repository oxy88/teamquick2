import React from 'react'
import { View, TouchableOpacity, TextInput } from 'react-native'
import { H1, H3, Content, Button, Text, Input, Form, Item } from 'native-base'

import CommonHeader from '../../../Components/CommonHeader'

class AddEventScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: '주제 선택',
            eventType: '유형 선택',
            eventOptions: {}
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
        console.log(this.props.navigation.state.params)
        return (
            <Content>
                <CommonHeader navigation={this.props.navigation} title="이벤트 만들기"/>
                <H3 style={{margin: 10}}>이벤트 이름</H3>
                    <Input style={{backgroundColor: 'white'}} />
                <H3 style={{margin: 10}}>이벤트 주제</H3>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('SelectCategory', { _setCategory: this._setCategory })}
                    style={{backgroundColor: 'white', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>{this.state.category}</Text>
                    </TouchableOpacity>
                <H3 style={{margin: 10}}>이벤트 유형</H3>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('SelectEventType', { _setEventType: this._setEventType })}
                    style={{backgroundColor: 'white', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>{this.state.eventType}</Text>
                    </TouchableOpacity>
                <H3 style={{margin: 10}}>이벤트 설명</H3>
                    <Input multiline style={{backgroundColor: 'white', height: 80}} />
                <H3 style={{margin: 10}}>고급 설정</H3>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('SelectEventOptions', { _setEventOptions: this._setEventOptions })}
                    style={{backgroundColor: 'white', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>고급 설정</Text>
                </TouchableOpacity>
                <Button 
                onPress={() => this.props.navigation.navigate('App')}
                block style={{marginTop: 10}}>
                    <Text>만들기</Text>
                </Button>
            </Content>
        )
    }
}

export default AddEventScreen