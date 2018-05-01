import React from 'react'
import { View, TouchableOpacity, TextInput } from 'react-native'
import { H1, H3, Content, Button, Text, Input, Form, Item } from 'native-base'

import CommonHeader from '../../../Components/CommonHeader'

class AddTeamScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: '주제 선택'
        }
        this._setCategory = this._setCategory.bind(this)
    }

    _setCategory(category) {
        this.setState({ category })
    }

    render() {
        console.log(this.props.navigation.state.params)
        return (
            <Content>
                <CommonHeader navigation={this.props.navigation} title="팀 만들기"/>
                <H3 style={{margin: 10}}>팀 로고</H3>
                    <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={{ width: 100, height: 100, borderWidth: 1}}>
                        <Text>누르면 팀 로고 선택함</Text>
                    </TouchableOpacity>
                    </View>
                <H3 style={{margin: 10}}>팀 이름</H3>
                    <Input style={{backgroundColor: 'white'}} />
                <H3 style={{margin: 10}}>팀 주제</H3>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('SelectCategory', { _setCategory: this._setCategory })}
                    style={{backgroundColor: 'white', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>{this.state.category}</Text>
                    </TouchableOpacity>
                <H3 style={{margin: 10}}>팀 설명</H3>
                    <Input multiline style={{backgroundColor: 'white', height: 80}} />
                <Button 
                onPress={() => this.props.navigation.navigate('App')}
                block style={{marginTop: 10}}>
                    <Text>만들기</Text>
                </Button>
            </Content>
        )
    }
}

export default AddTeamScreen