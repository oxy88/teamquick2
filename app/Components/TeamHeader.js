import React from 'react'
import { Header, Left, Body, Right, Title, Button, Icon } from 'native-base'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

class TeamHeader extends React.Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.title ? this.props.title : "팀 이름"}</Title>
                </Body>
                <Right>
                    <Button transparent onPress={() => this.props.navigation.navigate('Search')}>
                        <Icon name="search" />
                    </Button>
                    <Button transparent onPress={() => alert('관심 등록')}>
                        <Icon name="heart" />
                    </Button>
                </Right>
            </Header>
        )
    }
}

TeamHeader.propTypes = {
    navigation: PropTypes.object
}

const LIKE_TEAM_MUTATION = gql`
mutation likeTeamMutation($teamId: ID!) {
    likeTeam(
        teamId: $teamId
    ) {
        id
        name
        description
        logoUrl
        members {
            id
            name
        }
    }
}
`

const DIS_LIKE_TEAM_MUTATION = gql`
mutation disLikeTeamMutation($teamId: ID!) {
    disLikeTeam(
        teamId: $teamId
    ) {
        id
        name
        description
        logoUrl
        members {
            id
            name
        }
    }
}
`

export default TeamHeader