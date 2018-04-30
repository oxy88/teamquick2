import React from 'react'
import { View } from 'react-native'
import { Button, Text } from 'native-base'

class LoginScreen extends React.Component {
    render() {
        return (
            <View>
                <Text>LoginScreen</Text>
                <Button onPress={() => this.props.navigation.navigate('App')}>
                    <Text>로그인하기</Text>
                </Button>
            </View>
        )
    }
}

export default LoginScreen