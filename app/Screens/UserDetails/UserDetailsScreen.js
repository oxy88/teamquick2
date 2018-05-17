import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Container, Content, Text, Tabs, Tab, H3, Icon, Left, Right, ListItem, List, Thumbnail, Body, Card, CardItem } from 'native-base'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import UserHeader from '../../Components/UserHeader'
import UserMenu from './Components/UserMenu'
import HomeTab from './Tabs/HomeTab'
import TeamTab from './Tabs/TeamTab'
import ScheduleTab from './Tabs/ScheduleTab'
import HistoryTab from './Tabs/HistoryTab'

import LoadingScreen from '../SystemScreens/LoadingScreen'
import ErrorScreen from '../SystemScreens/ErrorScreen'

import USER_QUERY from '../../Query/USER_QUERY'

class UserDetailsScreen extends React.Component {
    render() {
        if (!this.props.navigation || !this.props.navigation.state.params) {
            return <ErrorScreen />
        }

        return (
            <Query
                query={USER_QUERY}
                variables={{
                    id: this.props.navigation.state.params.userId
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
                <UserHeader navigation={this.props.navigation} title={data.user.name}/>
            <Content>
                <UserMenu />
                <Tabs scrollWithoutAnimation>
                    <Tab heading="홈">
                        <HomeTab interests={data.user.interests}/>
                    </Tab>
                    <Tab heading="소속팀">
                        <TeamTab teams={data.user.teams} navigation={this.props.navigation}/>
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

export default UserDetailsScreen