import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

import HomeMainScreen from './HomeMainScreen'
import EventDetailsScreen from '../EventDetails/EventDetailsScreen'
import TeamDetailsDivider from '../TeamDetails/TeamDetailsDivider'
import UserDetailsScreen from '../UserDetails/UserDetailsScreen'
import RecommendTeamScreen from './Recommend/RecommendTeamScreen'
import RecommendMemberScreen from './Recommend/RecommendMemberScreen'
import UserMatchingStack from './UserMatching/UserMatchingStack'
import IncompleteTeamMatchingStack from './IncompleteTeamMatching/IncompleteTeamMatchingStack'
import TeamMatchingStack from './TeamMatching/TeamMatchingStack'

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
    RecommendTeam: {
        screen: RecommendTeamScreen
    },
    RecommendMember: {
        screen: RecommendMemberScreen
    },
    UserMatching: {
        screen: UserMatchingStack
    },
    IncompleteTeamMatching: {
        screen: IncompleteTeamMatchingStack
    },
    TeamMatching: {
        screen: TeamMatchingStack
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