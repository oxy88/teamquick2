import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { Content, H1, H2 } from 'native-base'

import CommonHeader from '../../../Components/CommonHeader'

class SelectEventTypeScreen extends React.Component {
    render() {
        return (
            <Content>
                <CommonHeader navigation={this.props.navigation} title="이벤트 유형 선택"/>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.state.params._setEventType('개인 매칭')
                    this.props.navigation.goBack()
                }}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>개인 매칭</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.state.params._setEventType('1대1 팀전')
                    this.props.navigation.goBack()
                }}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>1대1 팀전</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.state.params._setEventType('토너먼트')
                    this.props.navigation.goBack()
                }}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>토너먼트</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.state.params._setEventType('리그')
                    this.props.navigation.goBack()
                }}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>리그</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {
                    this.props.navigation.state.params._setEventType('기타')
                    this.props.navigation.goBack()
                }}
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>기타</Text>
                </TouchableOpacity>
            </Content>
        )
    }
}

export default SelectEventTypeScreen