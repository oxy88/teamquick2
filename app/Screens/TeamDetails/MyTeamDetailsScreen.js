import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Container, Content, Text, Tabs, Tab, Icon, Left, Right, Button } from 'native-base'

import TeamHeader from '../../Components/TeamHeader'

import MyTeamMenu from './Components/MyTeamMenu'
import HomeTab from './Tabs/HomeTab'
import ScheduleTab from './Tabs/ScheduleTab'
import HistoryTab from './Tabs/HistoryTab'
import SettingTab from './Tabs/SettingTab'

class MyTeamDetailsScreen extends React.Component {
    render() {
        return (
            <Container>
                <TeamHeader navigation={this.props.navigation} title={this.props.team.name} />
            <Content>
                <MyTeamMenu />
                <Tabs scrollWithoutAnimation>
                    <Tab heading="홈">
                        <HomeTab 
                            navigation={this.props.navigation}
                            members={this.props.team.members}
                        />
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
    }
}

export default MyTeamDetailsScreen