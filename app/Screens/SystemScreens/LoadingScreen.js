import React from 'react'
import { View } from 'react-native'
import { Text, Spinner } from 'native-base'

class LoadingScreen extends React.Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Spinner />
                <Text>{this.props.loadingMsg ? this.props.loadingMsg : "로딩중"}</Text>
            </View>
        )
    }
}

export default LoadingScreen