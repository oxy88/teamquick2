import React from 'react'
import { Container, Button, Text } from 'native-base'

class SettingsScreen extends React.Component {
    render() {
        return (
            <Container>
                <Text>SettingsScreen</Text>
                <Button onPress={() => this.props.navigation.navigate('Auth')}>
                    <Text>로그아웃</Text>
                </Button>
            </Container>
        )
    }
}

export default SettingsScreen