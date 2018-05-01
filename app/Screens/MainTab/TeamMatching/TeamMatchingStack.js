import React from 'react'
import { StackNavigator } from 'react-navigation'

import TeamMatchingScreen from './TeamMatchingScreen'

const TeamMatchingStack = StackNavigator({
    TeamMatchingMain: {
        screen: TeamMatchingScreen
    },
}, {
    headerMode: 'none'
})

export default TeamMatchingStack