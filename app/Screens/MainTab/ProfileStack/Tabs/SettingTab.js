import React from 'react'
import { View, Switch } from 'react-native'
import { Text } from 'native-base'

class SettingTab extends React.Component {
    render() {
        return (
            <React.Fragment>
            <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginVertical: 10}}>
                <Text style={{marginLeft: 10}}>메세지 수신 거부</Text><Switch></Switch>
            </View>
            <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginVertical: 10}}>
                <Text style={{marginLeft: 10}}>팀 초대 거부</Text><Switch></Switch>
            </View>
            <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginVertical: 10}}>
                <Text style={{marginLeft: 10}}>프로필 비공개</Text><Switch></Switch>
            </View>
            </React.Fragment>
        )
    }
}

export default SettingTab