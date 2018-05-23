import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { Text } from 'native-base'

import I18n from '../../i18n/i18n'

class EventList extends React.Component {
    refineDate(dateString) {
        const add0 = (num) => {
            return num < 10 ? "0" + num : num
        }

        const fullDate = new Date(dateString)
        let month = add0(fullDate.getMonth() + 1)
        let date = add0(fullDate.getDate())
        let hours = add0(fullDate.getHours())
        let minutes = add0(fullDate.getMinutes())

        return `${month}/${date} ${hours}:${minutes}`
    }

    truncate(string) {
        const length = 20
        if (string.length > length) {
            return string.substring(0, 20) + '...'
        } else {
            return string
        }
    }

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
                    <Text>{`(${I18n.t(event.category)}) (${I18n.t(event.type)}) ${this.refineDate(event.startTime)}`}</Text>
                    <Text>{this.truncate(event.place.description)}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default EventList