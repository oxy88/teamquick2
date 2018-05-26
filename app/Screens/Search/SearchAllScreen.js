import React from 'react'
import { Content, Text, H3 } from 'native-base'
import { withNavigation } from 'react-navigation'

import EventList from '../../Components/Event/EventList'
import TeamList from '../../Components/Team/TeamList'
import UserList from '../../Components/User/UserList'

class SearchAllScreen extends React.Component {
    render() {
        const eventsFirstThree = this.props.events.slice(0,3)
        const teamsFirstThree = this.props.teams.slice(0,3)
        const usersFirstThree = this.props.users.slice(0,3)

        return (
            <Content>
                <H3 style={{margin: 10}}>이벤트</H3>
                {eventsFirstThree.map(event => {
                    return (
                        <EventList 
                            key={event.id}
                            event={event}
                            navigation={this.props.navigation}
                        />
                    )
                })}
                <H3 style={{margin: 10}}>팀</H3>
                {teamsFirstThree.map(team => {
                    return (
                        <TeamList 
                            key={team.id}
                            team={team}
                            navigation={this.props.navigation}
                        />
                    )
                })}
                <H3 style={{margin: 10}}>사람</H3>
                {usersFirstThree.map(user => {
                    return (
                        <UserList 
                            key={user.id}
                            user={user}
                            navigation={this.props.navigation}
                        />
                    )
                })}
            </Content>
        )
    }
}

export default withNavigation(SearchAllScreen)