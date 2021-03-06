import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'

import AddMainScreen from './AddMainScreen'
import AddTeamScreen from './AddTeam/AddTeamScreen'
import SelectCategoryScreen from './AddTeam/SelectCategoryScreen'
import AddEventScreen from './AddEvent/AddEventScreen'
import SelectEventTypeScreen from './AddEvent/SelectEventTypeScreen'
import AddScrimmageScreen from './AddScrimmage/AddScrimmageScreen'
import AddInterestScreen from './AddInterest/AddInterestScreen'
import SelectPlaceScreen from './AddEvent/SelectPlaceScreen'
import AddressAutoCompleteScreen from './AddEvent/AddressAutoCompleteScreen'

const AddStack = StackNavigator({
    AddMain: {
        screen: AddMainScreen
    },
    AddTeam: {
        screen: AddTeamScreen
    },
    AddScrimmage: {
        screen: AddScrimmageScreen
    },
    AddInterest: {
        screen: AddInterestScreen
    },
    SelectCategory: {
        screen: SelectCategoryScreen
    },
    AddEvent: {
        screen: AddEventScreen
    },
    SelectEventType: {
        screen: SelectEventTypeScreen
    },
    SelectPlace: {
        screen: SelectPlaceScreen
    },
    AddressAutoComplete: {
        screen: AddressAutoCompleteScreen
    }
}, {
    headerMode: 'none'
})

export default AddStack