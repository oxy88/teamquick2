import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { H3, Text, Form, Picker, Left, Body, Right, Button, Header, Title, Icon, Input } from 'native-base'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

import MY_PROFILE_QUERY from '../../../../Query/MY_PROFILE_QUERY'

const Item = Picker.Item

class EtcGamesProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gameName: "",
            name: "",
            stats: "",
            description: ""
        }
        this.onValueChange = this.onValueChange.bind(this)
    }

    onValueChange(key, value) {
        this.setState({
          [key]: value
        });
    }

    render() {
        return (
            <Mutation 
                mutation={CREATE_INTEREST_ETC_GAMES_MUTATION}
                update={(cache, { data }) => {
                    const { myProfile } = cache.readQuery({
                        query: MY_PROFILE_QUERY
                    })
                    cache.writeQuery({
                        query: MY_PROFILE_QUERY,
                        data: {
                            myProfile: {
                                ...myProfile,
                                interests: myProfile.interests.concat([data.createInterestEtcGames])
                            }
                        }
                    })
                }}
            >
            {( createInterestEtcGames, { data, loading, error }) => {
                return (
                    <React.Fragment>
                    <H3 style={{margin: 10}}>게임 이름</H3>
                        <View style={{flexDirection: "row"}}>
                            <Input 
                                onChangeText={text => this.setState({ gameName: text })}
                                placeholder="예) 히어로즈 오브 더 스톰" 
                                style={{backgroundColor: 'white'}}
                            />
                        </View>
                    <H3 style={{margin: 10}}>닉네임</H3>
                        <View style={{flexDirection: "row"}}>
                            <Input 
                                onChangeText={text => this.setState({ name: text })}
                                placeholder="예) hide on bush" 
                                style={{backgroundColor: 'white'}} 
                            />
                        </View>
                    <H3 style={{margin: 10}}>게임 내 스탯</H3>
                        <View style={{flexDirection: "row"}}>
                            <Input 
                                onChangeText={text => this.setState({ stats: text })}
                                placeholder="예) 랭킹 1위" 
                                style={{backgroundColor: 'white'}} 
                            />
                        </View>
                    <H3 style={{margin: 10}}>자유 입력</H3>
                    <Input 
                        placeholder="예) 아무말이나 쓰면 됨"
                        onChangeText={(text) => this.setState({ description: text })}
                        style={{backgroundColor: 'white'}} 
                    />
                    <Button 
                    onPress={async() => {
                        await createInterestEtcGames({
                            variables: {
                                gameName: this.state.gameName,
                                name: this.state.name,
                                stats: this.state.stats,
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

const CREATE_INTEREST_ETC_GAMES_MUTATION = gql`
mutation createInterestEtcGamesMutation($gameName: String!, $name: String, $stats: String, $description: String) {
    createInterestEtcGames(
        gameName: $gameName
        name: $name
        stats: $stats
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

export default EtcGamesProfile