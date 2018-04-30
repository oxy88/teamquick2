import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Content, Text, Header, Left, Button, Icon } from 'native-base'

import CommonHeader from '../../Components/CommonHeader'

class AddMainScreen extends React.Component {
    render() {
        return (
            <Content>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.dispatch({ type: 'Navigation/BACK'})}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                </Header>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('AddTeam')}
                style={{width: 100, height: 100, borderWidth: 1}}>
                    <Text>팀 만들기</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => this.props.navigation.navigate('AddEvent')}
                style={{width: 100, height: 100, borderWidth: 1}}>
                    <Text>이벤트 만들기</Text>
                </TouchableOpacity>
            </Content>
        )
    }
}

export default AddMainScreen