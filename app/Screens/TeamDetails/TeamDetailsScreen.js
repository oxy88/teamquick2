import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Container, Content, Text, Tabs, Tab, Icon, Left, Right, H3, List, ListItem, Card, CardItem, Thumbnail, Body } from 'native-base'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import TeamHeader from '../../Components/TeamHeader'
import TeamMenu from './Components/TeamMenu'
import HomeTab from './Tabs/HomeTab'
import ScheduleTab from './Tabs/ScheduleTab'
import HistoryTab from './Tabs/HistoryTab'

import LoadingScreen from '../SystemScreens/LoadingScreen'
import ErrorScreen from '../SystemScreens/ErrorScreen'

import TEAM_QUERY from '../../Query/TEAM_QUERY'

class TeamDetailsScreen extends React.Component {
    render() {
        return (
            <Query 
                query={TEAM_QUERY}
                variables={{
                    id: this.props.navigation.state.params.teamId
                }}
            >
            {({ data, loading, error }) => {
                if (loading) {
                    return <LoadingScreen />
                }

                if (error) {
                    return <ErrorScreen />
                }

                return (
                    <Container>
                    <TeamHeader navigation={this.props.navigation} title={data.team.name}/>
                    <Content>
                        <TeamMenu teamId={this.props.navigation.state.params.teamId} />
                    <Tabs scrollWithoutAnimation>
                        <Tab heading="홈">
                            <HomeTab members={data.team.members}/>
                        </Tab>
                        <Tab heading="일정">
                            <ScheduleTab />
                        </Tab>
                        <Tab heading="기록">
                            <HistoryTab />
                        </Tab>
                    </Tabs>
                </Content>
                </Container>
                )
            }}
            </Query>
        )
    }
}

export default TeamDetailsScreen