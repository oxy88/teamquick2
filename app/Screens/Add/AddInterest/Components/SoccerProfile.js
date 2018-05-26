import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { H3, Text, Form, Picker, Left, Body, Right, Button, Header, Title, Icon, Input } from 'native-base'

import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

import MY_PROFILE_QUERY from '../../../../Query/MY_PROFILE_QUERY'

const Item = Picker.Item

class SoccerProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: "",
            role: "FILL",
            position: "FILL",
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
                mutation={CREATE_INTEREST_SOCCER_MUTATION}
                update={( cache, { data } ) => {
                    const { myProfile } = cache.readQuery({
                        query: MY_PROFILE_QUERY
                    })
                    cache.writeQuery({
                        query: MY_PROFILE_QUERY,
                        data: {
                            myProfile: {
                                ...myProfile,
                                interests: myProfile.interests.concat([data.createInterestSoccer])
                            }
                        }
                    })
                }}
            >
            {( createInterestSoccer, { data, loading, error }) => {
                return (
                    <React.Fragment>
                    <H3 style={{margin: 10}}>축구 실력</H3>
                        <View style={{flexDirection: "row"}}>
                            <Input 
                                placeholder="예) 짱잘함" 
                                style={{backgroundColor: 'white'}} 
                                onChangeText={(text) => this.setState({ description: text })}
                            />
                        </View>
                    <H3 style={{margin: 10}}>역할</H3>
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
                                        <Title>역할 선택</Title>
                                    </Body>
                                    <Right />
                                </Header>
                            }
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: "100%", backgroundColor: 'white' }}
                            itemStyle={{ justifyContent: 'space-between' }}
                            selectedValue={this.state.role}
                            onValueChange={(value) => this.onValueChange("role", value)}
                            >
                            <Item label="상관 없음" value="FILL" />
                            <Item label="골키퍼" value="GK" />
                            <Item label="수비" value="D" />
                            <Item label="미드" value="M" />
                            <Item label="공격" value="F" />
                            </Picker>
                        </Form>
                        <H3 style={{margin: 10}}>위치</H3>
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
                                        <Title>위치 선택</Title>
                                    </Body>
                                    <Right />
                                </Header>
                            }
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: "100%", backgroundColor: 'white' }}
                            itemStyle={{ justifyContent: 'space-between' }}
                            selectedValue={this.state.position}
                            onValueChange={(value) => this.onValueChange("position", value)}
                            >
                            <Item label="상관 없음" value="FILL" />
                            <Item label="왼쪽" value="L" />
                            <Item label="중앙" value="C" />
                            <Item label="오른쪽" value="R" />
                            </Picker>
                        </Form>
                    <Button 
                    onPress={async() => {
                        await createInterestSoccer({
                            variables: {
                                description: this.state.description,
                                role: this.state.role,
                                position: this.state.position
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

const CREATE_INTEREST_SOCCER_MUTATION = gql`
mutation createInterestSoccerMutation($description: String, $role: SoccerRole!, $position: SoccerPosition!) {
    createInterestSoccer(
        description: $description,
        role: $role,
        position: $position
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

export default SoccerProfile