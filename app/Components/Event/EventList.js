import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Text } from 'native-base'

class EventList extends React.Component {
    render() {
        const { event, navigation } = this.props
        return (
            <TouchableOpacity 
                onPress={() => navigation.navigate('EventDetails', { eventId: event.id })}
                style={{borderWidth: 1, height: 60, margin: 10, flexDirection: "row", alignItems: 'center'}} 
                key={event.id}
            >
                <Image source={{ uri: event.iconUrl }} style={{width: 40, height:40}} />
                <View>
                    <Text>{event.name}</Text>
                    <Text>(롤) (토너먼트) 05/02 18:00</Text>
                    <Text>온라인</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default EventList