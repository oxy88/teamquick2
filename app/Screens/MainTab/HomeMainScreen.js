import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { H1, H2, Container, Content, Text } from 'native-base'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import I18n from '../../i18n/i18n'

import MainHeader from '../../Components/MainHeader'
import EventList from '../../Components/Event/EventList'
import LoadingScreen from '../SystemScreens/LoadingScreen'
import ErrorScreen from '../SystemScreens/ErrorScreen'

import EVENTS_QUERY from '../../Query/EVENTS_QUERY'

class HomeMainScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showAutoTeam: true
        }
    }

    render() {
        return (
            <Query query={EVENTS_QUERY}>
            {({ data, loading, error }) => {
            if (loading) {
                return <LoadingScreen />
            }

            if (error) {
                return <ErrorScreen />
            }

            return (
            <Container>
                <MainHeader navigation={this.props.navigation}/>
                <Content>
                    {this.state.showAutoTeam ? 
                    <TouchableOpacity onPress={() => this.setState({ showAutoTeam: false})} style={{flexDirection: "row", borderWidth: 1, alignItems: 'center'}}>
                        <View style={{borderWidth: 1, width: 50, height: 50}} />
                        <Text>자동 생성 팀 (클릭하면 없어짐)</Text>
                    </TouchableOpacity>
                    : null
                    }
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                        <H2 style={{margin: 10}}>매칭</H2>
                    </TouchableOpacity>
                    <View style={{flexDirection: "row", justifyContent: 'center'}}>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('UserMatching')}
                    style={{height: 50, borderWidth: 1, margin: 10}}>
                        <Text>개인 매칭</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('IncompleteTeamMatching')}
                    style={{height: 50, borderWidth: 1, margin: 10}}>
                        <Text>불완전 팀 매칭</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('TeamMatching')}
                    style={{height: 50, borderWidth: 1, margin: 10}}>
                        <Text>팀 매칭</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{borderBottomWidth: 1, marginTop: 20, borderColor: "gray"}} />
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                        <H2 style={{margin: 10}}>찾기</H2>
                    </TouchableOpacity>
                    <View style={{flexDirection: "row", justifyContent: 'center'}}>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('FindMyTeamMember')}
                    style={{height: 50, borderWidth: 1, margin: 10}}>
                        <Text>맞춤 팀원 찾기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('FindMyTeam')}
                    style={{height: 50, borderWidth: 1, margin: 10}}>
                        <Text>맞춤 팀 찾기</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{borderBottomWidth: 1, marginTop: 20, borderColor: "gray"}} />
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                        <H2 style={{margin: 10}}>이벤트</H2>
                        <Text style={{color: 'blue' }}>더 보기</Text>
                    </TouchableOpacity>
                    { data.events.map(event => {
                        return (
                            <EventList 
                                key={event.id}
                                event={event} 
                                navigation={this.props.navigation}
                            />
                        )
                    })}
                </Content>
            </Container>
            )
            }}
            </Query>
        )
    }
}

export default HomeMainScreen