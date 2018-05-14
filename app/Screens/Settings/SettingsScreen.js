import React from 'react'
import { AsyncStorage } from 'react-native'
import { Container, Button, Text } from 'native-base'

import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import CommonHeader from '../../Components/CommonHeader'
import { TOKEN } from '../../config/constants'

class SettingsScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Query query={MY_NAME_QUERY}>
            {({ client, data, loading, error }) => {
            if (loading) {
                return null
            }
            return (
            <Container>
                <CommonHeader navigation={this.props.navigation} />
                <Text>SettingsScreen</Text>
                <Text>내 이름 : {data.myName}</Text>
                <Button onPress={async() => {
                    await AsyncStorage.removeItem(TOKEN)
                    client.resetStore()
                    this.props.navigation.navigate('Auth')
                }}>
                    <Text>로그아웃</Text>
                </Button>
            </Container>
            )
            }}
            </Query>
        )
    }
}

const MY_NAME_QUERY = gql`
query myNameQuery {
    myName
}
`

export default SettingsScreen