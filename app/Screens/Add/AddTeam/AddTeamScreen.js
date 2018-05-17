import React from 'react'
import { View, TouchableOpacity, TextInput } from 'react-native'
import { Container, H1, H3, Content, Button, Text, Input, Form, Item } from 'native-base'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import I18n from '../../../i18n/i18n'

import CommonHeader from '../../../Components/CommonHeader'

import MY_PROFILE_QUERY from '../../../Query/MY_PROFILE_QUERY'

class AddTeamScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            teamName: "",
            category: 'LOL',
            description: ""
        }
        this._setCategory = this._setCategory.bind(this)
    }

    _setCategory(category) {
        this.setState({ category })
    }

    render() {
        return (
            <Mutation 
                mutation={CREATE_TEAM_MUTATION}
                update={(cache, { data }) => {
                    const { myProfile } = cache.readQuery({
                        query: MY_PROFILE_QUERY
                    })
                    cache.writeQuery({
                        query: MY_PROFILE_QUERY,
                        data: {
                            myProfile: {
                                ...myProfile,
                                teams: myProfile.teams.concat([ data.createTeam ])
                            }
                        }
                    })
                }}
            >
            {( createTeam, { data, loading, error }) => {
            return (
            <Container>
                <CommonHeader navigation={this.props.navigation} title="팀 만들기"/>
            <Content>
                <H3 style={{margin: 10}}>팀 로고</H3>
                    <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={{ width: 100, height: 100, borderWidth: 1}}>
                        <Text>누르면 팀 로고 선택함</Text>
                    </TouchableOpacity>
                    </View>
                <H3 style={{margin: 10}}>팀 이름</H3>
                    <Input 
                        onChangeText={(text) => this.setState({ teamName: text })}
                        style={{backgroundColor: 'white'}} 
                    />
                <H3 style={{margin: 10}}>팀 주제</H3>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('SelectCategory', { _setCategory: this._setCategory })}
                    style={{backgroundColor: 'white', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>{I18n.t(this.state.category)}</Text>
                    </TouchableOpacity>
                <H3 style={{margin: 10}}>팀 설명</H3>
                    <Input 
                        onChangeText={(text) => this.setState({ description: text })}
                        multiline 
                        style={{backgroundColor: 'white', height: 80}} 
                    />
                <Button 
                onPress={async () => {
                    await createTeam({
                        variables: {
                            teamName: this.state.teamName,
                            category: this.state.category,
                            description: this.state.description
                        }
                    })
                    this.props.navigation.navigate('MainTab')
                }}
                block style={{marginTop: 10}}>
                    <Text>만들기</Text>
                </Button>
            </Content>
            </Container>
            )
            }}
            </Mutation>
        )
    }
}

const CREATE_TEAM_MUTATION = gql`
mutation createTeamMutation($teamName: String!, $category: Category!, $description: String!) {
    createTeam(
        teamName: $teamName
        category: $category
        description: $description
    ) {
        id
        category
        name
    }
}
`

export default AddTeamScreen