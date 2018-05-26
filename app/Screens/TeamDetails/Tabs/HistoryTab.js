import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from 'native-base'
import { Query } from 'react-apollo'

import EventList from '../../../Components/Event/EventList'

import EVENTS_QUERY from '../../../Query/EVENTS_QUERY'

class HistoryTab extends React.Component {
    render() {
        return (
            <Query query={EVENTS_QUERY}>
            {({ data, loading, error }) => {
                return (
                    <React.Fragment>
                    {data.events.map(event => {
                        return (
                            <EventList
                            key={event.id}
                            event={event}
                            navigation={this.props.navigation}
                        />
                        )
                    })}
                    </React.Fragment>
                )
            }}
            </Query>
        )
    }
}

export default HistoryTab