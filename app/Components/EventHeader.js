import React from 'react'
import { Header, Body, Right, Title, Button, Icon } from 'native-base'
import PropTypes from 'prop-types'

class EventHeader extends React.Component {
    render() {
        return (
            <Header>
                <Body>
                    <Title>이벤트 이름</Title>
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

EventHeader.propTypes = {
    navigation: PropTypes.object
}

export default EventHeader