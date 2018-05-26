import React from 'react'
import { Container, Content, Button, Text, Input } from 'native-base'
import { Query, Mutation } from 'react-apollo'
import gql from 'graphql-tag'

import CommonHeader from '../../../Components/CommonHeader'

import MY_PROFILE_QUERY from '../../../Query/MY_PROFILE_QUERY'

class EditIntroductionScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            introduction: this.props.navigation.state.params.introduction
        }
    }

    render() {
        return (
            <Mutation
                mutation={EDIT_INTRODUCTION_MUTATION}
            >
            {( editIntroduction, { loading, error }) => {
                return (
                <Container>
                <CommonHeader navigation={this.props.navigation} title="소개 편집"/>
                <Content>
                    <Input 
                        value={this.state.introduction}
                        onChangeText={(text) => this.setState({ introduction: text })}
                        placeholder="자기 소개"
                        style={{backgroundColor: 'white'}} 
                        numberOfLines={3}
                    /> 
                    <Button 
                    block
                    onPress={async() => {
                        await editIntroduction({
                            variables: {
                                introduction: this.state.introduction
                            }
                        })
                        this.props.navigation.goBack()
                    }}
                    >
                        <Text>저장</Text>
                    </Button>
                </Content>
                </Container>
                )}}
            </Mutation>
        )
    }
}

const EDIT_INTRODUCTION_MUTATION = gql`
mutation editIntroductionMutation($introduction: String) {
    editIntroduction(introduction: $introduction) {
        id
        name
        avatarUrl
        introduction
        teams {
            id
            category
            name
            logoUrl
        }
        events {
            id
            name
        }
        interests {
            id
            category
            firstLine
            secondLine
            thirdLine
        }
    }
}
`

export default EditIntroductionScreen