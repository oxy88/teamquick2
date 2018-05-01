import React from 'react'
import { StackNavigator, SwitchNavigator } from 'react-navigation'
import { Header, Left, Body, Right, Button, Text, Icon, Title } from 'native-base'

import MainTab from './MainTab/MainTab'
import LoginScreen from './AuthStack/LoginScreen'
import AuthLoadingScreen from './AuthLoadingScreen'
import SearchMainScreen from './Search/SearchMainScreen'
import SettingsScreen from './Settings/SettingsScreen'
import AddStack from './Add/AddStack'
import UserMatchingStack from './MainTab/UserMatching/UserMatchingStack'
import TeamMatchingStack from './MainTab/TeamMatching/TeamMatchingStack'

const AppStack = StackNavigator({
    MainTab: {
        screen: MainTab,
        navigationOptions: {
            header: null
        }
    },
    Search: {
        screen: SearchMainScreen,
        navigationOptions: {
            header: null
        }
    },
    UserMatching: {
        screen: UserMatchingStack
    },
    TeamMatching: {
        screen: TeamMatchingStack
    },
    Settings: SettingsScreen,
    Add: {
        screen: AddStack
    }
}, {
    headerMode: 'none',
    // transitionConfig: () => ({
    //     transitionSpec: {
    //         duration: 0,
    //     },
    // }),
})

const AuthStack = StackNavigator({
    Login: LoginScreen
}, {
    headerMode: 'none'
})

export default SwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack
}, {
    initialRouteName: 'AuthLoading'
})
