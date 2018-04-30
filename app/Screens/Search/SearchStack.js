import React from 'react'
import { Container, Text } from 'native-base'
import { StackNavigator } from 'react-navigation'

class SearchScreen extends React.Component {
    render() {
        return (
            <Container>
                <Text>SearchScreen</Text>
            </Container>
        )
    }
}

const SearchStack = StackNavigator({
    SearchMain: {
        screen: SearchScreen
    }
}, {
    headerMode: 'none'
})

export default SearchStack