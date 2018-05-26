import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Text } from 'native-base'

class UserList extends React.Component {
    render() {
        const { user, navigation } = this.props
        return (
            <TouchableOpacity 
                onPress={() => navigation.navigate('UserDetails', { userId: user.id })}
                style={{borderWidth: 1, height: 60, margin: 10, flexDirection: "row", alignItems: 'center'}} 
                key={user.id}
            >
                <Image source={{ uri: "https://cdn3.iconfinder.com/data/icons/black-easy/512/535106-user_512x512.png" }} style={{width: 40, height:40}} />
                <View>
                    <Text>{user.name}</Text>
                    <Text>사람 설명</Text>
                    <Text>사람 설명2</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default UserList