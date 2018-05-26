import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Content, Text, Right, Icon } from 'native-base'
import { withNavigation } from 'react-navigation'

import EventList from '../../Components/Event/EventList'

class SearchEventScreen extends React.Component {
    render() {
        return (
            <Content>
                <View style={{ margin: 10, flexDirection: "row", alignItems: 'center'}}>
                    <Text>기준1</Text>
                    <Text>기준2</Text>
                    <Text>기준3</Text>
                    <Right>
                        <TouchableOpacity>
                        <Icon name="options" />
                        </TouchableOpacity>
                    </Right>
                </View>
                <View style={{borderBottomWidth: 1}} />
                {this.props.events.map(event => {
                    return (
                        <EventList 
                            key={event.id}
                            navigation={this.props.navigation}
                            event={event}
                        />
                    )
                })}
            </Content>
        )
    }
}

export default withNavigation(SearchEventScreen)