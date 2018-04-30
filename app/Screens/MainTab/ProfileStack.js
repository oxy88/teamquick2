import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

import ProfileMainScreen from './ProfileMainScreen'
import EventDetailsScreen from '../EventDetails/EventDetailsScreen'
import TeamDetailsScreen from '../TeamDetails/TeamDetailsScreen'
import UserDetailsScreen from '../UserDetails/UserDetailsScreen'

const ProfileStack = StackNavigator({
    ProfileMain: {
        screen: ProfileMainScreen
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

export default ProfileStack