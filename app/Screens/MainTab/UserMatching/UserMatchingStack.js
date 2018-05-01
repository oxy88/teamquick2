import React from 'react'
import { StackNavigator } from 'react-navigation'

import UserMatchingScreen from './UserMatchingScreen'
import LolUserMatchingScreen from './LolUserMatchingScreen'
import PubgUserMatchingScreen from './PubgUserMatchingScreen'
import OverwatchUserMatchingScreen from './OverwatchUserMatchingScreen'
import EtcGameUserMatchingScreen from './EtcGameUserMatchingScreen'
import SoccerUserMatchingScreen from './SoccerUserMachingScreen'
import BasketballUserMatchingScreen from './BasketballUserMatchingScreen';
import EtcSportsUserMatchingScreen from './EtcSportsUserMatchingScreen'
import EtcUserMatchingScreen from './EtcUserMatchingScreen'

const UserMatchingStack = StackNavigator({
    UserMatchingMain: {
        screen: UserMatchingScreen
    },
    LolUserMatching: {
        screen: LolUserMatchingScreen
    },
    
    PubgUserMatching: {
        screen: PubgUserMatchingScreen
    },
    OverwatchUserMatching: {
        screen: OverwatchUserMatchingScreen
    },
    EtcGameUserMatching: {
        screen: EtcGameUserMatchingScreen
    },
    SoccerUserMatching: {
        screen: SoccerUserMatchingScreen
    },
    BasketballUserMatching: {
        screen: BasketballUserMatchingScreen
    },
    EtcSportsUserMatching: {
        screen: EtcSportsUserMatchingScreen
    },
    EtcUserMatching: {
        screen: EtcUserMatchingScreen
    }
}, {
    headerMode: 'none'
})

export default UserMatchingStack