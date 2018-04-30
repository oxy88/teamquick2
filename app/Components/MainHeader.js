import React from 'react'
import { Header, Body, Right, Title, Button, Icon } from 'native-base'
import PropTypes from 'prop-types'

class MainHeader extends React.Component {
    render() {
        return (
            <Header>
                <Body>
                    <Title>TeamQuick</Title>
                </Body>
                <Right>
                    <Button transparent onPress={() => this.props.navigation.navigate('Search')}>
                        <Icon name="search" />
                    </Button>
                    <Button transparent onPress={() => this.props.navigation.navigate('Add')}>
                        <Icon name="add" />
                    </Button>
                    <Button transparent onPress={() => this.props.navigation.navigate('Settings')}>
                        <Icon name="settings" />
                    </Button>
                </Right>
            </Header>
        )
    }
}

MainHeader.propTypes = {
    navigation: PropTypes.object
}

export default MainHeader