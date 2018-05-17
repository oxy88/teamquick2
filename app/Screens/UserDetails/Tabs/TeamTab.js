import React from 'react'
import { Text } from 'native-base'

import TeamList from '../../../Components/Team/TeamList'

class TeamTab extends React.Component {
    render() {
        return (
            <React.Fragment>
                {this.props.teams.map(team => {
                    return (
                        <TeamList 
                            key={team.id}
                            team={team}
                            navigation={this.props.navigation}
                        />
                    )
                })}            
            </React.Fragment>
        )
    }
}

export default TeamTab