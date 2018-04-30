import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

import HomeMainScreen from './HomeMainScreen'
import EventDetailsScreen from '../EventDetails/EventDetailsScreen'
import TeamDetailsScreen from '../TeamDetails/TeamDetailsScreen'
import UserDetailsScreen from '../UserDetails/UserDetailsScreen'
import UserMatchingScreen from './UserMatching/UserMatchingScreen'
import TeamMatchingScreen from './TeamMatching/TeamMatchingScreen'

const HomeStack = StackNavigator({
    HomeMain: {
        screen: HomeMainScreen
    },
    EventDetails: {
        screen: EventDetailsScreen
    },
    TeamDetails: {
        screen: TeamDetailsScreen
    },
    UserDetails: {
        screen: UserDetailsScreen
    },
    UserMatching: {
        screen: UserMatchingScreen
    },
    TeamMatching: {
        screen: TeamMatchingScreen
    }
}, {
    headerMode: 'none',
    transitionConfig: () => ({
        transitionSpec: {
            duration: 0,
        },
    }),
})

export default HomeStack