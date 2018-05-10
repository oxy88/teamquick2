import React from 'react'
import { Container, Button, Text } from 'native-base'

import CommonHeader from '../../../Components/CommonHeader'

class EditIntroductionScreen extends React.Component {
    render() {
        return (
            <Container>
                <CommonHeader navigation={this.props.navigation} title="소개 편집"/>
                <Text>EditIntroductionScreen</Text>
            </Container>
        )
    }
}

export default EditIntroductionScreen