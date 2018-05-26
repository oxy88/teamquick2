import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { H3, Text, Form, Picker, Left, Body, Right, Button, Header, Title, Icon, Input } from 'native-base'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

import MY_PROFILE_QUERY from '../../../../Query/MY_PROFILE_QUERY'

const Item = Picker.Item

class AnyProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            topic: "",
            description: ""
        }
    }

    render() {
        return (
            <Mutation 
                mutation={CREATE_INTEREST_ANY_MUTATION}
                update={(cache, { data }) => {
                    const { myProfile } = cache.readQuery({
                        query: MY_PROFILE_QUERY
                    })
                    cache.writeQuery({
                        query: MY_PROFILE_QUERY,
                        data: {
                            myProfile: {
                                ...myProfile,
                                interests: myProfile.interests.concat([data.createInterestAny])
                            }
                        }
                    })
                }}
            >
            {( createInterestAny, { data, loading, error }) => {
                return (
                    <React.Fragment>
                    <H3 style={{margin: 10}}>주제</H3>
                        <View style={{flexDirection: "row"}}>
                            <Input 
                                onChangeText={text => this.setState({ topic: text })}
                                placeholder="예) 밥먹기" 
                                style={{backgroundColor: 'white'}} 
                            />
                        </View>
                    <H3 style={{margin: 10}}>자유 입력</H3>
                        <View style={{flexDirection: "row"}}>
                            <Input 
                                onChangeText={text => this.setState({ description: text })}
                                placeholder="예) 간장치킨먹고싶당" 
                                style={{backgroundColor: 'white'}} 
                            />
                        </View>
                    <Button 
                    onPress={async() => {
                        await createInterestAny({
                            variables: {
                                topic: this.state.topic,
                                description: this.state.description
                            }
                        })
                        this.props.navigation.navigate('MainTab')
                    }}
                    block style={{marginTop: 10}}>
                        <Text>만들기</Text>
                    </Button>
                    </React.Fragment>
                )
            }}
            </Mutation>
        )
    }
}

const CREATE_INTEREST_ANY_MUTATION = gql`
mutation createInterestAnyMutation($topic: String!, $description: String) {
    createInterestAny(
        topic: $topic
        description: $description
    ) {
        id
        category
        categoryIconUrl
        firstLine
        secondLine
        thirdLine
        teams {
            id
            category
            name
            logoUrl
        }
    }
}
`

export default AnyProfile