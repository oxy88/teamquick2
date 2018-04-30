import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

import LikeMainScreen from './LikeMainScreen'
import EventDetailsScreen from '../EventDetails/EventDetailsScreen'
import TeamDetailsScreen from '../TeamDetails/TeamDetailsScreen'
import UserDetailsScreen from '../UserDetails/UserDetailsScreen'

const LikeStack = StackNavigator({
    LikeMain: {
        screen: LikeMainScreen
    },
    EventDetails: {
        screen: EventDetailsScreen
    },
    TeamDetails: {
        screen: TeamDetailsScreen
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