import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { H3, Text, Form, Picker, Left, Body, Right, Button, Header, Title, Icon, Input } from 'native-base'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

import MY_PROFILE_QUERY from '../../../../Query/MY_PROFILE_QUERY'

const Item = Picker.Item

class LolProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            lolTier: "BRONZE",
            lolRole: "FILL"
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
                mutation={CREATE_INTEREST_LOL_MUTATION}
                update={( cache, { data }) => {
                    const { myProfile } = cache.readQuery({
                        query: MY_PROFILE_QUERY
                    })
                    cache.writeQuery({
                        query: MY_PROFILE_QUERY,
                        data: {
                            myProfile: {
                                ...myProfile,
                                interests: myProfile.interests.concat([data.createInterestLol])
                            }
                        }
                    })
                }}
            >
            {( createInterestLol, { data, loading, error }) => {
            return (
            <React.Fragment>
                <H3 style={{margin: 10}}>소환사명</H3>
                    <View style={{flexDirection: "row"}}>
                        <Input 
                            onChangeText={(text) => this.setState({ name: text })}
                            style={{backgroundColor: 'white'}} 
                        />
                        <Button>
                            <Text>갱신</Text>
                        </Button>
                    </View>
                <View>
                    <Text>Gold 3 78LP 100승 90패 정글</Text>
                    <View style={{flexDirection: "row"}}>
                    <Image style={{width: 50, height: 50}} source={{uri: "https://www.mobafire.com/images/champion/square/garen.png"}} />
                    <Image style={{width: 50, height: 50}} source={{uri: "https://www.mobafire.com/images/champion/square/galio.png"}} />
                    <Image style={{width: 50, height: 50}} source={{uri: "https://www.mobafire.com/images/champion/square/gangplank.png"}} />
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
                    selectedValue={this.state.lolTier}
                    onValueChange={(value) => this.onValueChange("lolTier", value)}
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
                    selectedValue={this.state.lolRole}
                    onValueChange={(value) => this.onValueChange("lolRole", value)}
                    >
                    <Item label="상관없음" value="FILL" />
                    <Item label="탑" value="TOP" />
                    <Item label="정글" value="JUNGLE" />
                    <Item label="미드" value="MID" />
                    <Item label="원딜" value="ADC" />
                    <Item label="서포터" value="SUPPORT" />
                    </Picker>
                </Form>
                <Button 
                onPress={async () => {
                    await createInterestLol({
                        variables: {
                            name: this.state.name,
                            tier: this.state.lolTier,
                            role: this.state.lolRole
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

const CREATE_INTEREST_LOL_MUTATION = gql`
mutation createInterestLolMutation($name: String, $tier: LolTier!, $role: LolRole!){
    createInterestLol(
        name: $name
        tier: $tier
        role: $role
    ) {
        id
        category
        description
    }
}
`

export default LolProfile