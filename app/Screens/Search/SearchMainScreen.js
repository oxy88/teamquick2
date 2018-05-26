import React from 'react'
import { VirtualizedList, ScrollView, View, TouchableOpacity } from 'react-native'
import { Container, List, ListItem, Content, Text, Header, Left, Body, Right, Icon, Input, Item, Button, Tabs, Tab, H3, ScrollableTab } from 'native-base'
import { Query } from 'react-apollo'

import SearchAllScreen from './SearchAllScreen'
import SearchEventScreen from './SearchEventScreen'
import SearchTeamScreen from './SearchTeamScreen'
import SearchUserScreen from './SearchUserScreen'

import LoadingScreen from '../SystemScreens/LoadingScreen'
import ErrorScreen from '../SystemScreens/ErrorScreen'

import EVENTS_QUERY from '../../Query/EVENTS_QUERY'
import TEAMS_QUERY from '../../Query/TEAMS_QUERY'
import USERS_QUERY from '../../Query/USERS_QUERY'

class BeforeSearch extends React.Component {
    render() {
        return (
            <React.Fragment>
            <Button block onPress={() => this.props._showAll()}>
            <Text>모두 보기</Text>
            </Button>
            <View style={{margin: 10, flexDirection: "row", alignItems: 'center', justifyContent: 'space-between'}}>
                <H3>최근 검색어</H3>
                <TouchableOpacity>
                    <Icon name="close-circle" />
                </TouchableOpacity>
            </View>
            <View style={{borderBottomWidth: 1}} />
            <View style={{borderBottomWidth: 1, height: 40, justifyContent: 'center', backgroundColor: 'white'}}>
                <Text>어쩌꾸저쩌구</Text>
            </View>
            <View style={{borderBottomWidth: 1, height: 40, justifyContent: 'center', backgroundColor: 'white'}}>
                <Text>어쩌꾸저쩌구</Text>
            </View>
            <View style={{borderBottomWidth: 1, height: 40, justifyContent: 'center', backgroundColor: 'white'}}>
                <Text>어쩌꾸저쩌구</Text>
            </View>
            </React.Fragment>
        )
    }
}

class AfterSearch extends React.Component {
    render() {
        return (
            <Query query={EVENTS_QUERY}>
            {({ data: { events }, loading: loadingEvents, error: errorEvents }) => (
                <Query query={TEAMS_QUERY}>
                    {({ data: { teams }, loading: loadingTeams, error: errorTeams }) => (
                        <Query query={USERS_QUERY}>
                            {({ data: { users }, loading: loadingUsers, error: errorUsers }) => {
                                if (loadingEvents || loadingTeams || loadingUsers) {
                                    return <LoadingScreen />
                                }
                                if (errorEvents || errorTeams || errorUsers) {
                                    return <ErrorScreen />
                                }

                                return (
                                    <Tabs renderTabBar={() => <ScrollableTab />}>
                                    <Tab heading="모두">
                                        <SearchAllScreen 
                                            events={events} teams={teams} users={users}
                                        />
                                    </Tab>
                                    <Tab heading="이벤트">
                                        <SearchEventScreen events={events} />
                                    </Tab>
                                    <Tab heading="팀">
                                        <SearchTeamScreen teams={teams} />
                                    </Tab>
                                    <Tab heading="사람">
                                        <SearchUserScreen users={users} />
                                    </Tab>
                                    <Tab heading="프로필">
                                        <Text>asdf</Text>
                                    </Tab>
                                    </Tabs>
                                )
                            }}
                        </Query>
                    )}
                </Query>
            )}
        </Query>
        )
    }
}

class SearchMainScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchText: "",
            showAll: false
        }
        this._showAll = this._showAll.bind(this)
    }

    _showAll() {
        this.setState({ showAll: true })
    }

    render() {
        return (
            <Container>
            <Header searchBar style={{backgroundColor: 'white'}}>
                <Item style={{backgroundColor: 'white'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </TouchableOpacity>
                    <Input 
                        placeholder="검색..." 
                        autoFocus
                        value={this.state.searchText}
                        onChangeText={(text) => this.setState({ searchText: text})}
                        onSubmitEditing={() => alert('최근검색어에 저장시키자')}
                    />
                </Item>
            </Header>
            {!this.state.showAll && !this.state.searchText ? 
                <BeforeSearch _showAll={this._showAll} /> : 
                <AfterSearch 
            />}
            </Container>
        )
        }
    }

export default SearchMainScreen