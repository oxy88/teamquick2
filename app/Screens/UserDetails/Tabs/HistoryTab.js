import React from 'react'
import { H3, Text } from 'native-base'

class HistoryTab extends React.Component {
    render() {
        return (
            <React.Fragment>
                <H3>주최</H3>
                    <Text>주최 이벤트1</Text>
                    <Text>주최 이벤트2</Text>
                    <Text>주최 이벤트3</Text>
                <H3>참가</H3>
                    <Text>주최 이벤트1</Text>
                    <Text>주최 이벤트2</Text>
                    <Text>주최 이벤트3</Text>
            </React.Fragment>
        )
    }
}

export default HistoryTab