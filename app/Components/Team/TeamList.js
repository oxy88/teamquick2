import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Text } from 'native-base'

class TeamList extends React.Component {
    render() {
        const { team, navigation } = this.props
        return (
            <TouchableOpacity 
                onPress={() => navigation.navigate('TeamDetails', { teamId: team.id })}
                style={{borderWidth: 1, height: 60, margin: 10, flexDirection: "row", alignItems: 'center'}} 
                key={team.id}
            >
                <Image source={{ uri: team.logoUrl }} style={{width: 40, height:40}} />
                <View>
                    <Text>{team.name}</Text>
                    <Text>{team.description}</Text>
                    <Text>팀 설명2</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default TeamList