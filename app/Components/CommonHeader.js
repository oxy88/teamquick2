import React from 'react'
import { Header, Left, Button, Icon, Body, Title, Right } from 'native-base'

class CommonHeader extends React.Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={() => this.props.navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.title ? this.props.title : ""}</Title>
                </Body>
                <Right>
                </Right>
                {/* <Body>
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
                </Right> */}
            </Header>
        )
    }
}

export default CommonHeader