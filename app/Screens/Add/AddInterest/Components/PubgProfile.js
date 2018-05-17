import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { H3, Text, Form, Picker, Left, Body, Right, Button, Header, Title, Icon, Input } from 'native-base'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

import MY_PROFILE_QUERY from '../../../../Query/MY_PROFILE_QUERY'

const Item = Picker.Item

class PubgProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            pubgServer: "KAKAO",
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
                mutation={CREATE_INTEREST_PUBG_MUTATION}
                update={( cache, { data } ) => {
                    const { myProfile } = cache.readQuery({
                        query: MY_PROFILE_QUERY
                    })
                    cache.writeQuery({
                        query: MY_PROFILE_QUERY,
                        data: {
                            myProfile: {
                                ...myProfile,
                                interests: myProfile.interests.concat([data.createInterestPubg])
                            }
                        }
                    })
                }}
            >
            {( createInterestPubg, { data, loading, error }) => {
                return (
                    <React.Fragment>
                    <H3 style={{margin: 10}}>닉네임</H3>
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
                        <Text>1837점 100게임 우승: 10% 탑10: 20% 처치/죽음: 2.04 평균딜: 193</Text>
                    </View>
                    <H3 style={{margin: 10}}>서버</H3>
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
                                    <Title>서버 선택</Title>
                                </Body>
                                <Right />
                            </Header>
                        }
                        iosIcon={<Icon name="ios-arrow-down-outline" />}
                        style={{ width: "100%", backgroundColor: 'white' }}
                        itemStyle={{ justifyContent: 'space-between' }}
                        selectedValue={this.state.pubgServer}
                        onValueChange={(value) => this.onValueChange("pubgServer", value)}
                        >
                        <Item label="카카오" value="KAKAO" />
                        <Item label="한국" value="KR" />
                        <Item label="아시아" value="AS" />
                        </Picker>
                    </Form>
                    <Button 
                    onPress={async () => {
                        await createInterestPubg({
                            variables: {
                                name: this.state.name,
                                server: this.state.pubgServer
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

const CREATE_INTEREST_PUBG_MUTATION = gql`
mutation createInterestPubgMutation($name: String, $server: PubgServer!){
    createInterestPubg(
        name: $name
        server: $server
    ) {
        id
        category
        description
    }
}
`

export default PubgProfile