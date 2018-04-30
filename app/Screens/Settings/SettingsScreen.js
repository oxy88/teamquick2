import React from 'react'
import { Container, Button, Text } from 'native-base'

import CommonHeader from '../../Components/CommonHeader'

class SettingsScreen extends React.Component {
    render() {
        return (
            <Container>
                <CommonHeader navigation={this.props.navigation} />
                <Text>SettingsScreen</Text>
                <Button onPress={() => this.props.navigation.navigate('Auth')}>
                    <Text>로그아웃</Text>
                </Button>
            </Container>
        )
    }
}

export default SettingsScreen