import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

import ProfileMainScreen from './ProfileMainScreen'
import DirectMessageListScreen from './ProfileStack/DirectMessageListScreen'
import EventDetailsScreen from '../EventDetails/EventDetailsScreen'
import TeamDetailsDivider from '../TeamDetails/TeamDetailsDivider'
import MyTeamDetailsScreen from '../TeamDetails/MyTeamDetailsScreen'
import UserDetailsScreen from '../UserDetails/UserDetailsScreen'
import EditIntroductionScreen from './ProfileStack/EditIntroductionScreen'

const ProfileStack = StackNavigator({
    ProfileMain: {
        screen: ProfileMainScreen
    },
    DirectMessageList: {
        screen: DirectMessageListScreen
    },
    EditIntroduction: {
        screen: EditIntroductionScreen
    },
    EventDetails: {
        screen: EventDetailsScreen
    },
    TeamDetails: {
        screen: TeamDetailsDivider
    },
    MyTeamDetails: {
        screen: MyTeamDetailsScreen
    },
    UserDetails: {
        screen: UserDetailsScreen
    },
}, {
    headerMode: 'none',
    transitionConfig: () => ({
        transitionSpec: {
            duration: 0,
        },
    }),
})

export default ProfileStack