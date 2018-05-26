import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Content, Text, Right, Icon } from 'native-base'
import { withNavigation } from 'react-navigation'

import TeamList from '../../Components/Team/TeamList'

class SearchTeamScreen extends React.Component {
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
                {this.props.teams.map(team => {
                    return (
                        <TeamList
                            key={team.id}
                            navigation={this.props.navigation}
                            team={team}
                        />
                    )
                })}
            </Content>
        )
    }
}

export default withNavigation(SearchTeamScreen)