import React from 'react'
import { StackNavigator } from 'react-navigation'

import IncompleteTeamMatchingScreen from './IncompleteTeamMatchingScreen'

const IncompleteTeamMatchingStack = StackNavigator({
    IncompleteTeamMatchingMain: {
        screen: IncompleteTeamMatchingScreen
    },
}, {
    headerMode: 'none'
})

export default IncompleteTeamMatchingStack