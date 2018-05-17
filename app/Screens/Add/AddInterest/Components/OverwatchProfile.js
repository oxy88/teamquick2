import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { H3, Text, Form, Picker, Left, Body, Right, Button, Header, Title, Icon, Input } from 'native-base'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

import MY_PROFILE_QUERY from '../../../../Query/MY_PROFILE_QUERY'

const Item = Picker.Item

class OverwatchProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            overwatchTier: "BRONZE",
            overwatchRole: "FILL"
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
                mutation={CREATE_INTEREST_OVERWATCH_MUTATION}
                update={( cache, { data }) => {
                    const { myProfile } = cache.readQuery({
                        query: MY_PROFILE_QUERY
                    })
                    cache.writeQuery({
                        query: MY_PROFILE_QUERY,
                        data: {
                            myProfile: {
                                ...myProfile,
                                interests: myProfile.interests.concat([data.createInterestOverwatch])
                            }
                        }
                    })
                }}                
            >
            {( createInterestOverwatch, { data, loading, error }) => {
                return (
                    <React.Fragment>
                    <H3 style={{margin: 10}}>배틀태그</H3>
                        <View style={{flexDirection: "row"}}>
                            <Input 
                                onChangeText={text => this.setState({ name: text })}
                                style={{backgroundColor: 'white'}} 
                            />
                            <Button>
                                <Text>갱신</Text>
                            </Button>
                        </View>
                    <View>
                        <Text>2008점 100승 90패 탱커</Text>
                        <View style={{flexDirection: "row"}}>
                        <Image style={{width: 50, height: 50}} source={{uri: "https://vignette.wikia.nocookie.net/overwatch/images/3/30/Hanzo_icon.png/revision/latest/scale-to-width-down/95?cb=20180308025241"}} />
                        <Image style={{width: 50, height: 50}} source={{uri: "https://vignette.wikia.nocookie.net/overwatch/images/1/10/Genji_icon.png/revision/latest/scale-to-width-down/95?cb=20180308025152"}} />
                        <Image style={{width: 50, height: 50}} source={{uri: "https://vignette.wikia.nocookie.net/overwatch/images/a/a5/Widowmaker_icon.png/revision/latest/scale-to-width-down/95?cb=20141108010054"}} />
                        </View>
                    </View>
                    <H3 style={{margin: 10}}>티어</H3>
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
                                    <Title>티어 선택</Title>
                                </Body>
                                <Right />
                            </Header>
                        }
                        iosIcon={<Icon name="ios-arrow-down-outline" />}
                        style={{ width: "100%", backgroundColor: 'white' }}
                        itemStyle={{ justifyContent: 'space-between' }}
                        selectedValue={this.state.overwatchTier}
                        onValueChange={(value) => this.onValueChange("overwatchTier", value)}
                        >
                        <Item label="브론즈" value="BRONZE" />
                        <Item label="실버" value="SILVER" />
                        <Item label="골드" value="GOLD" />
                        <Item label="플래티넘" value="PLATINUM" />
                        <Item label="다이아" value="DIAMOND" />
                        </Picker>
                    </Form>
    
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
                        selectedValue={this.state.overwatchRole}
                        onValueChange={(value) => this.onValueChange("overwatchRole", value)}
                        >
                        <Item label="상관없음" value="FILL" />
                        <Item label="탱커" value="TANK" />
                        <Item label="딜러" value="DPS" />
                        <Item label="힐러" value="HEAL" />
                        </Picker>
                    </Form>
                    <Button 
                    onPress={async () => {
                        await createInterestOverwatch({
                            variables: {
                                name: this.state.name,
                                tier: this.state.overwatchTier,
                                role: this.state.overwatchRole
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

const CREATE_INTEREST_OVERWATCH_MUTATION = gql`
mutation createInterestOverwatchMutation($name: String, $tier: OverwatchTier!, $role: OverwatchRole!) {
    createInterestOverwatch(
        name: $name,
        tier: $tier,
        role: $role
    ) {
        id
        category
        description
    }
}
`

export default OverwatchProfile