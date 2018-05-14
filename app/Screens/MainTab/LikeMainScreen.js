import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Header, Container, Content, Tabs, Tab, Text, Button } from 'native-base'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import MainHeader from '../../Components/MainHeader'
import EventList from '../../Components/Event/EventList'
import TeamList from '../../Components/Team/TeamList'
import UserList from '../../Components/User/UserList'

import LoadingScreen from '../SystemScreens/LoadingScreen'
import ErrorScreen from '../SystemScreens/ErrorScreen'

import EVENTS_QUERY from '../../Query/EVENTS_QUERY'
import TEAMS_QUERY from '../../Query/TEAMS_QUERY'
import USERS_QUERY from '../../Query/USERS_QUERY'

class LikeMainScreen extends React.Component {
    render() {
        return (
            <Query query={EVENTS_QUERY}>
            {({ data: { events }, loading: loadingEvents, error: errorEvents }) => (
                <Query query={TEAMS_QUERY}>
                {({ data: { teams }, loading: loadingTeams, error: errorTeams }) => (
                    <Query query={USERS_QUERY}>
                    {({ data: { users }, loading: loadingUsers, error: errorUsers }) => {
                        if (loadingEvents || loadingTeams || loadingUsers) {
                            return <LoadingScreen />
                        }
                        if (errorEvents || errorTeams || errorUsers) {
                            return <ErrorScreen />
                        }

                        return (
                            <Container>
                                <MainHeader navigation={this.props.navigation}/>
                                <Content>
                                    <Tabs scrollWithoutAnimation>
                                        <Tab heading="이벤트">
                                            {events.map(event => {
                                                return (
                                                    <EventList
                                                        key={event.id}
                                                        event={event}
                                                        navigation={this.props.navigation}
                                                    />
                                                )
                                            })}
                                        </Tab>
                                        <Tab heading="팀">
                                            {teams.map(team => {
                                                return (
                                                    <TeamList
                                                        key={team.id}
                                                        team={team}
                                                        navigation={this.props.navigation}
                                                    />
                                                )
                                            })}
                                        </Tab>
                                        <Tab heading="사람">
                                            {users.map(user => {
                                                return (
                                                    <UserList
                                                        key={user.id}
                                                        user={user}
                                                        navigation={this.props.navigation}
                                                    />
                                                )
                                            })}
                                        </Tab>
                                    </Tabs>
                                </Content>
                            </Container>
                        )
                    }}
                    </Query>
                )}
                </Query>
            )}
            </Query>
        )
    }
}

export default LikeMainScreen