import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

import NotificationsMainScreen from './NotificationsMainScreen'
import EventDetailsScreen from '../EventDetails/EventDetailsScreen'
import TeamDetailsDivider from '../TeamDetails/TeamDetailsDivider'
import UserDetailsScreen from '../UserDetails/UserDetailsScreen'

const NotificationsStack = StackNavigator({
    NotificationsMain: {
        screen: NotificationsMainScreen
    },
    EventDetails: {
        screen: EventDetailsScreen
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

export default NotificationsStack