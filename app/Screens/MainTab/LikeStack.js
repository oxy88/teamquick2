import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

import LikeMainScreen from './LikeMainScreen'
import EventDetailsScreen from '../EventDetails/EventDetailsScreen'
import MyEventDetailsScreen from '../EventDetails/MyEventDetailsScreen'
import GoingEventDetailsScreen from '../EventDetails/GoingEventDetailsScreen'
import UserMatchingEventDetailsScreen from '../EventDetails/UserMatchingEventDetailsScreen'
import OneOnOneEventDetailsScreen from '../EventDetails/OneOnOneEventDetailsScreen'
// import TeamDetailsScreen from '../TeamDetails/TeamDetailsScreen'
import TeamDetailsDivider from '../TeamDetails/TeamDetailsDivider'
import UserDetailsScreen from '../UserDetails/UserDetailsScreen'

const LikeStack = StackNavigator({
    LikeMain: {
        screen: LikeMainScreen
    },
    EventDetails: {
        screen: EventDetailsScreen
    },
    MyEventDetails: {
        screen: MyEventDetailsScreen
    },
    GoingEventDetails: {
        screen: GoingEventDetailsScreen
    },
    UserMatchingEventDetails: {
        screen: UserMatchingEventDetailsScreen
    },
    OneOnOneEventDetails: {
        screen: OneOnOneEventDetailsScreen
    },
    TeamDetails: {
        screen: TeamDetailsDivider
    },
    UserDetails: {
        screen: UserDetailsScreen
    }
}, {
    headerMode: 'none',
    transitionConfig: () => ({
        transitionSpec: {
            duration: 0,
        },
    }),
})

export default LikeStack