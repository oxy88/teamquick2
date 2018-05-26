import React from 'react'
import { View, TouchableOpacity, TextInput } from 'react-native'
import { Container, H1, H3, Content, Button, Text, Input, Form, Item, Picker, Header, Body, Left, Right, Title, Icon } from 'native-base'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'
import I18n from '../../../i18n/i18n'

import CommonHeader from '../../../Components/CommonHeader'

import LoadingScreen from '../../SystemScreens/LoadingScreen'
import ErrorScreen from '../../SystemScreens/ErrorScreen'

import MY_PROFILE_QUERY from '../../../Query/MY_PROFILE_QUERY'

class AddTeamScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            teamName: "",
            selectedProfile: {},
            description: ""
        }
        this.onValueChange = this.onValueChange.bind(this)
    }

    onValueChange(key, value) {
        this.setState({
            [key]: value
        })
    }

    render() {
        return (
            <Query query={MY_PROFILE_QUERY}>
            {({ data: { myProfile }, loading: loadingMyProfile, error: errorMyProfile }) => (
                <Mutation 
                mutation={CREATE_TEAM_MUTATION}
                update={(cache, { data }) => {
                }}
                >
                {( createTeam, { data, loading, error }) => {
                if (loadingMyProfile) {
                    return <LoadingScreen />
                }
                if (errorMyProfile) {
                    return <ErrorScreen />
                }

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
                        <H3 style={{margin: 10}}>프로필 선택</H3>
                            <Form>
                                <Picker
                                renderHeader={backAction =>
                                    <Header>
                                        <Left>
                                            <Button transparent onPress={backAction}>
                                                <Icon name="arrow-back" />
                                            </Button>
                                        </Left>
                                        <Body>
                                            <Title>팀 선택</Title>
                                        </Body>
                                        <Right />
                                    </Header>
                                }
                                iosIcon={<Icon name="ios-arrow-down-outline" />}
                                style={{ width: "100%", backgroundColor: 'white' }}
                                itemStyle={{ justifyContent: 'space-between' }}
                                selectedValue={this.state.selectedProfile}
                                onValueChange={(value) => this.onValueChange("selectedProfile", value)}
                                >
                                {myProfile.interests.map(interest => {
                                    return <Picker.Item key={interest.id} label={`${interest.category} - ${interest.firstLine}`} value={interest} />
                                })}
                                </Picker>
                            </Form>           
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
                                    interestId: this.state.selectedProfile.id,
                                    category: this.state.selectedProfile.category,
                                    description: this.state.description,
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
            )}
            </Query>
        )
    }
}

const CREATE_TEAM_MUTATION = gql`
mutation createTeamMutation($teamName: String!, $interestId: ID!, $category: Category!, $description: String!) {
    createTeam(
        teamName: $teamName
        interestId: $interestId
        description: $description
        category: $category
    ) {
        id
        category
        name
        logoUrl
    }
}
`

export default AddTeamScreen