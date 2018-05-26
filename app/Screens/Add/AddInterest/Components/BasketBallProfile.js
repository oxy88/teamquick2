import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'
import { H3, Text, Form, Picker, Left, Body, Right, Button, Header, Title, Icon, Input } from 'native-base'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

import MY_PROFILE_QUERY from '../../../../Query/MY_PROFILE_QUERY'

import MyPicker from '../../../../Components/MyPicker'

const Item = Picker.Item

class BasketBallProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            description: "",
            role: "FILL"
        }
        this.onValueChange = this.onValueChange.bind(this)
    }

    onValueChange(key, value) {
        this.setState({
          [key]: value
        });
    }

    render() {
        const BASKET_BALL_ROLE_LIST = ["FILL", "GUARD", "FORWARD", "CENTER"]
        return (
            <Mutation 
                mutation={CREATE_INTEREST_BASKET_BALL_MUTATION}
                update={(cache, { data }) => {
                    const { myProfile } = cache.readQuery({
                        query: MY_PROFILE_QUERY,
                    })
                    cache.writeQuery({
                        query: MY_PROFILE_QUERY,
                        data: {
                            myProfile: {
                                ...myProfile,
                                interests: myProfile.interests.concat([data.createInterestBasketBall])
                            }
                        }
                    })
                }}
            >
            {( createInterestBasketBall, { data, loading, error }) => {
                return (
                    <React.Fragment>
                    <H3 style={{margin: 10}}>농구 실력</H3>
                        <View style={{flexDirection: "row"}}>
                            <Input 
                                onChangeText={text => this.setState({ description: text })}
                                placeholder="예) 짱잘함" 
                                style={{backgroundColor: 'white'}} 
                            />
                        </View>
                        <MyPicker 
                            propName = "role" 
                            currentProp = {this.state.role}
                            options={BASKET_BALL_ROLE_LIST} 
                            onValueChange={(value) => this.onValueChange('role', value)}
                        />
                    <Button 
                    onPress={async() => {
                        await createInterestBasketBall({
                            variables: {
                                description: this.state.description,
                                role: this.state.role
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

const CREATE_INTEREST_BASKET_BALL_MUTATION = gql`
mutation createInterestBasketBallMutation($description: String, $role: BasketBallRole!) {
    createInterestBasketBall (
        description: $description
        role: $role
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

export default BasketBallProfile