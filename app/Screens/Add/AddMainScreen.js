import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

class AddMainScreen extends React.Component {
    render() {
        return (
            <View>
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
            </View>
        )
    }
}

export default AddMainScreen