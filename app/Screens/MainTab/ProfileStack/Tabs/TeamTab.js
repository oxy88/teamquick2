import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from 'native-base'

import TeamList from '../../../../Components/Team/TeamList'

class TeamTab extends React.Component {
    render() {
        return (
            <React.Fragment>
            {this.props.teams.map(team => {
                return (
                    <TeamList 
                        team={team} 
                        key={team.id}
                        navigation={this.props.navigation}
                    />
                )
            })}
            </React.Fragment>
        )
    }
}

export default TeamTab