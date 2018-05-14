import React from 'react'
import { View, TextInput, AsyncStorage } from 'react-native'
import { Button, Text } from 'native-base'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

import { TOKEN } from '../../config/constants'
import LoadingScreen from '../SystemScreens/LoadingScreen'
import ErrorScreen from '../SystemScreens/ErrorScreen'

class LoginScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: ""
        }
        this._login = this._login.bind(this)
    }

    _login() {
        this.props.navigation.navigate('App')
    }

    render() {
        return (
            <Mutation 
                mutation={LOGIN_MUTATION}
            >
            {( login, { data, loading, error }) => {
            if (loading) {
                return <LoadingScreen/>
            }
            if (error) {
                return <ErrorScreen />
            }
            return (
            <View>
                <TextInput 
                    style={{width: '100%', height: 100}} 
                    placeholder="아이디 입력"
                    onChangeText={(userName) => this.setState({ userName })}
                />
                <Button onPress={async () => {
                    const result = await login({
                        variables: {
                            name: this.state.userName
                        }
                    })
                    const token = result.data.login.token
                    await AsyncStorage.setItem(TOKEN, token)
                    this._login()
                }}>
                    <Text>로그인하기</Text>
                </Button>
            </View>
            )
            }}
            </Mutation>
        )
    }
}

const LOGIN_MUTATION = gql`
mutation loginMutation($name: String!) {
    login(name: $name) {
        userId
        token
    }
}
`

export default LoginScreen