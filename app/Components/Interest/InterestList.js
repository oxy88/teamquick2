import React from 'react'
import { ListItem, Thumbnail, Body, Text } from 'native-base'

class InterestList extends React.Component {
    render() {
        const { interest } = this.props
        return (
            <ListItem key={interest.id}>
            <Thumbnail square small source={{ uri: interest.categoryIconUrl }} />
            <Body>
                <Text>{interest.firstLine}</Text>
                <Text>{interest.secondLine}</Text>
                <Text note>{interest.thirdLine}</Text>
            </Body>
            </ListItem>
        )
    }
}

export default InterestList