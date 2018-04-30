import React from 'react'
import { View, StatusBar, AsyncStorage } from 'react-native'
import { Spinner } from 'native-base'
import { TOKEN } from '../config/constants'

class AuthLoadingScreen extends React.Component {
    constructor(props) {
        super(props)
        this._bootstrapAsync()
    }

    _bootstrapAsync = async() => {
        const userToken = await AsyncStorage.getItem(TOKEN)
        this.props.navigation.navigate(userToken ? 'App' : 'Auth')
    }

    render() {
        return (
            <View>
                <Spinner />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}

export default AuthLoadingScreen