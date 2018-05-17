import React from 'react'
import { View, TouchableOpacity, Switch } from 'react-native'
import { Container, Content, Text, Tabs, Tab, Button, Icon, Left, Right, H2, H3 } from 'native-base'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import MainHeader from '../../Components/MainHeader'
import ProfileMenu from './ProfileStack/Components/ProfileMenu'
import HomeTab from './ProfileStack/Tabs/HomeTab'
import TeamTab from './ProfileStack/Tabs/TeamTab'
import ScheduleTab from './ProfileStack/Tabs/ScheduleTab'
import HistoryTab from './ProfileStack/Tabs/HistoryTab'
import SettingTab from './ProfileStack/Tabs/SettingTab'

import LoadingScreen from '../SystemScreens/LoadingScreen'
import ErrorScreen from '../SystemScreens/ErrorScreen'

import MY_PROFILE_QUERY from '../../Query/MY_PROFILE_QUERY'

class ProfileMainScreen extends React.Component {
    render() {
        return (
            <Query query={MY_PROFILE_QUERY}>
            {({ data, loading, error }) => {
                if (loading) {
                    return <LoadingScreen />
                }

                if (error) {
                    return <ErrorScreen />
                }

                return (
                    <Container>
                    <MainHeader navigation={this.props.navigation}/>
                    <Content>
                        <ProfileMenu />
                    <Tabs scrollWithoutAnimation>
                        <Tab heading="홈">
                            <HomeTab interests={data.myProfile.interests} />
                        </Tab>
                        <Tab heading="소속팀">
                            <TeamTab teams={data.myProfile.teams} navigation={this.props.navigation} />
                        </Tab>
                        <Tab heading="일정">
                            <ScheduleTab />
                        </Tab>
                        <Tab heading="기록">
                            <HistoryTab />
                        </Tab>
                        <Tab heading="관리">
                            <SettingTab />
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

export default ProfileMainScreen