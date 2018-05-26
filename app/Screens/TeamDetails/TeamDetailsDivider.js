import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Container, Content, Text, Tabs, Tab, Icon, Left, Right, H3, List, ListItem, Card, CardItem, Thumbnail, Body } from 'native-base'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import TeamHeader from '../../Components/TeamHeader'
import TeamMenu from './Components/TeamMenu'
import MyTeamMenu from './Components/MyTeamMenu'
import HomeTab from './Tabs/HomeTab'
import ScheduleTab from './Tabs/ScheduleTab'
import HistoryTab from './Tabs/HistoryTab'
import SettingTab from './Tabs/SettingTab'
import MyTeamDetailsScreen from './MyTeamDetailsScreen'
import TeamDetailsScreen from './TeamDetailsScreen'

import LoadingScreen from '../SystemScreens/LoadingScreen'
import ErrorScreen from '../SystemScreens/ErrorScreen'

import TEAM_QUERY from '../../Query/TEAM_QUERY'
import MY_ID_QUERY from '../../Query/MY_ID_QUERY'

class TeamDetailsDivider extends React.Component {
    render() {
        return (
            <Query 
                query={TEAM_QUERY}
                variables={{
                    id: this.props.navigation.state.params.teamId
                }}
            >
            {({ data: { team } , loading: loadingTeam, error: errorTeam }) => (
                <Query query={MY_ID_QUERY}>
                {({ data: { myId }, loading: loadingMyId, error: errorMyId }) => {
                    if (loadingTeam || loadingMyId) {
                        return <LoadingScreen />
                    }

                    if (errorTeam || errorMyId) {
                        return <ErrorScreen />
                    }

                    console.log(team)

                    const isMyTeam = team.members.find(user => {
                        return user.id === myId
                    })

                    return (
                        <Container>
                        <TeamHeader navigation={this.props.navigation} title={team.name}/>
                        <Content>
                            {isMyTeam ? <MyTeamMenu team={team} /> : <TeamMenu team={team} />}
                        <Tabs scrollWithoutAnimation>
                            <Tab heading="홈">
                                <HomeTab 
                                    navigation={this.props.navigation}
                                    members={team.members}
                                />
                            </Tab>
                            <Tab heading="일정">
                                <ScheduleTab />
                            </Tab>
                            <Tab heading="기록">
                                <HistoryTab />
                            </Tab>
                            {isMyTeam ? (
                                <Tab heading="관리">
                                    <SettingTab />
                                </Tab>
                            ) : null}
                            </Tabs>
                        </Content>
                        </Container>
                    )
                }}
                </Query>
            )}
            </Query>
        )
    }
}

export default TeamDetailsDivider