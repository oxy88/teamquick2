import React from 'react'
import { VirtualizedList, ScrollView, View, TouchableOpacity } from 'react-native'
import { Container, List, ListItem, Content, Text, Header, Left, Body, Right, Icon, Input, Item, Button, Tabs, Tab } from 'native-base'

import SearchAllScreen from './SearchAllScreen'
import SearchEventScreen from './SearchEventScreen'
import SearchTeamScreen from './SearchTeamScreen'
import SearchUserScreen from './SearchUserScreen'

class SearchMainScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            afterSearch: false
        }
        this._search = this._search.bind(this)
    }

    _search(searchWord) {
        this.setState({ afterSearch: true })
    }

    render() {
        if (!this.state.afterSearch) {
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
                    onSubmitEditing={() => this.setState({ afterSearch: true })}
                />
            </Item>
            </Header>
            <Content>
                <Button onPress={() => this.setState({ afterSearch: true })}>
                    <Text>모두 보기</Text>
                </Button>
                <Text>최근 검색어</Text>
                <Text>어쩌꾸저쩌구</Text>
                <Text>어쩌꾸저쩌구</Text>
                <Text>어쩌꾸저쩌구</Text>
            </Content>
            </Container>
        )
        } else { return (
            <Container>
                          <Header searchBar style={{backgroundColor: 'white'}}>
                <Item style={{backgroundColor: 'white'}}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </TouchableOpacity>
                    <Input 
                        placeholder="검색..." 
                        autoFocus
                        onSubmitEditing={() => this.setState({ afterSearch: true })}
                    />
                </Item>
            </Header>
                <Tabs>
                    <Tab heading="모두">
                        <SearchAllScreen />
                    </Tab>
                    <Tab heading="이벤트">
                        <SearchEventScreen />
                    </Tab>
                    <Tab heading="팀">
                        <SearchTeamScreen />
                    </Tab>
                    <Tab heading="사람">
                        <SearchUserScreen />
                    </Tab>
                </Tabs>
            </Container>
        )
        }
    }
}

export default SearchMainScreen