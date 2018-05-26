import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { H3, Text, Form, Picker, Left, Body, Right, Button, Header, Title, Icon, Input } from 'native-base'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

import MY_PROFILE_QUERY from '../../../../Query/MY_PROFILE_QUERY'

const Item = Picker.Item

class EtcSportsProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sportsName: "",
            stats: "",
            description: ""
        }
    }

    render() {
        return (
            <Mutation
                mutation={CREATE_INTEREST_ETC_SPORTS_MUTATION}
                update={(cache, { data }) => {
                    const { myProfile } = cache.readQuery({
                        query: MY_PROFILE_QUERY
                    })
                    cache.writeQuery({
                        query: MY_PROFILE_QUERY,
                        data: {
                            myProfile: {
                                ...myProfile,
                                interests: myProfile.interests.concat([data.createInterestEtcSports])
                            }
                        }
                    })
                }}
            >
            {( createInterestEtcSports, { data, loading, error }) => {
                return (
                    <React.Fragment>
                    <H3 style={{margin: 10}}>종목</H3>
                        <View style={{flexDirection: "row"}}>
                            <Input 
                                onChangeText={text => this.setState({ sportsName: text })}
                                placeholder="예) 탁구, 테니스, 배드민턴" style={{backgroundColor: 'white'}} 
                            />
                        </View>
                    <H3 style={{margin: 10}}>실력</H3>
                        <View style={{flexDirection: "row"}}>
                            <Input 
                                onChangeText={text => this.setState({ stats: text })}
                                placeholder="예) 처음함, 잘함" style={{backgroundColor: 'white'}} 
                            />
                        </View>
                    <H3 style={{margin: 10}}>자유 입력</H3>
                        <View style={{flexDirection: "row"}}>
                            <Input 
                                onChangeText={text => this.setState({ description: text })}
                                placeholder="예) 탁구탁구" style={{backgroundColor: 'white'}} 
                            />
                        </View>
                    <Button 
                    onPress={async() => {
                        await createInterestEtcSports({
                            variables: {
                                sportsName: this.state.sportsName,
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

const CREATE_INTEREST_ETC_SPORTS_MUTATION = gql`
mutation createInterestEtcSportsMutation($sportsName: String!, $stats: String, $description: String){
    createInterestEtcSports(
        sportsName: $sportsName
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

export default EtcSportsProfile