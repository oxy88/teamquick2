import React from 'react'
import { TabNavigator, NavigationActions } from 'react-navigation'
import { Footer, FooterTab, Button, Icon, Text } from 'native-base'

import HomeStack from './HomeStack'
import LikeStack from './LikeStack'
import ProfileStack from './ProfileStack'

const MainTab = TabNavigator({
    Home: {
        screen: HomeStack
    },
    Like: {
        screen: LikeStack
    },
    Profile: {
        screen: ProfileStack
    },
}, {
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarComponent: props => {
      const tabBarList = [
        {
          index: 0,
          screen: "HomeStack",
          icon: "home",
          label: "홈",
        },
        {
          index: 1,
          screen: "LikeStack",
          icon: "heart",
          label: "관심",
        },
        {
          index: 2,
          screen: "ProfileStack",
          icon: "person",
          label: "내 정보",
        },
      ]
        return (
          <Footer>
            <FooterTab>
              {tabBarList.map(tabBar => {
                return (
                  <Button
                  key={tabBar.index}
                  vertical
                  active={props.navigationState.index === tabBar.index}
                  onPress={() => {
                    tab = props.navigationState.routes[tabBar.index];
                    tabRoute = tab.routeName;
                    firstRoute = tab.routes[0].routeName; // navState is Tabs object
              
                    const tabAction = NavigationActions.navigate({ routeName: tabRoute });
                    const firstScreenAction = NavigationActions.reset({ index: 0,
                      actions: [ NavigationActions.navigate({ routeName: firstRoute }) ]
                    });
                    props.navigation.dispatch(tabAction);
                    props.navigation.dispatch(firstScreenAction);
                  }}>
                  <Icon name={tabBar.icon} />
                  <Text>{tabBar.label}</Text>
                </Button>                  
                )
              })}
            </FooterTab>
          </Footer>
        );
      }
})

export default MainTab