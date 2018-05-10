import React from 'react'
import { Container, Button, Text } from 'native-base'

import CommonHeader from '../../../Components/CommonHeader'

class DirectMessageListScreen extends React.Component {
    render() {
        return (
            <Container>
                <CommonHeader navigation={this.props.navigation} title="귓속말"/>
                <Text>DirectMessageListScreen</Text>
            </Container>
        )
    }
}

export default DirectMessageListScreen