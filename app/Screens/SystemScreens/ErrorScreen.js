import React from 'react'
import { View } from 'react-native'
import { Button, Text } from 'native-base'

class ErrorScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 1}}>
                <Text style={{color: "red"}}>{this.props.errorMsg ? this.props.errorMsg : "오류 발생"}</Text>
            </View>
        )
    }
}

export default ErrorScreen