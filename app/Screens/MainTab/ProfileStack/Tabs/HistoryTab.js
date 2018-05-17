import React from 'react'
import { H2, Text } from 'native-base'

class HistoryTab extends React.Component {
    render() {
        return (
            <React.Fragment>
            <H2 style={{margin: 10}}>주최</H2>
                <Text>이벤트1</Text>
                <Text>이벤트2</Text>
            <H2 style={{margin: 10}}>참가</H2>
                <Text>이벤트3</Text>            
            </React.Fragment>
        )
    }
}

export default HistoryTab