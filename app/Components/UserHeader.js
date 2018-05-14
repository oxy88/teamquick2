import React from 'react'
import { Header, Left, Body, Right, Title, Button, Icon } from 'native-base'
import PropTypes from 'prop-types'

class UserHeader extends React.Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.title ? this.props.title : "알 수 없음"}</Title>
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

UserHeader.propTypes = {
    navigation: PropTypes.object
}

export default UserHeader