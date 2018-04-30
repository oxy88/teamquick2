import React from 'react'
import { StackNavigator, SwitchNavigator } from 'react-navigation'
import { Header, Left, Body, Right, Button, Text, Icon, Title } from 'native-base'

// import MainTab from './MainTab/MainTab'
// import SearchScreen from './Search/SearchScreen'
// import SearchEventScreen from './Search/SearchEventScreen'
// import SearchTeamScreen from './Search/SearchTeamScreen'
// import SearchUserScreen from './Search/SearchUserScreen'
// import EventDetailsScreen from './EventDetails/EventDetailsScreen'
// import TeamDetailsScreen from './TeamDetails/TeamDetailsScreen'
// import UserDetailsScreen from './UserDetails/UserDetailsScreen'
// import SettingsScreen from './Settings/SettingsScreen'
// import LoginScreen from './AuthStack/LoginScreen'
// import AuthLoadingScreen from './AuthLoadingScreen'

// const AppStack = StackNavigator({
//     MainTab: {
//         screen: MainTab,
//         navigationOptions: {
//             header: null
//         }
//     },
//     Search: SearchScreen,
//     SearchEvent: SearchEventScreen,
//     SearchTeam: SearchTeamScreen,
//     SearchUser: SearchUserScreen,
//     EventDetails: EventDetailsScreen,
//     TeamDetails: TeamDetailsScreen,
//     UserDetails: UserDetailsScreen,
//     Settings: SettingsScreen
// })

// const AuthStack = StackNavigator({
//     Login: LoginScreen
// }, {
//     headerMode: 'none'
// })

import MainTab from './MainTab/MainTab'
import LoginScreen from './AuthStack/LoginScreen'
import AuthLoadingScreen from './AuthLoadingScreen'
import SearchMainScreen from './Search/SearchMainScreen'
import SettingsScreen from './Settings/SettingsScreen'
import AddStack from './Add/AddStack'

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
