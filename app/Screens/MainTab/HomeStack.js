import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

import HomeMainScreen from './HomeMainScreen'
import EventDetailsScreen from '../EventDetails/EventDetailsScreen'
import TeamDetailsDivider from '../TeamDetails/TeamDetailsDivider'
import UserDetailsScreen from '../UserDetails/UserDetailsScreen'

const HomeStack = StackNavigator({
    HomeMain: {
        screen: HomeMainScreen
    },
    EventDetails: {
        screen: EventDetailsScreen
    },
    TeamDetails: {
        screen: TeamDetailsDivider
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

export default HomeStack