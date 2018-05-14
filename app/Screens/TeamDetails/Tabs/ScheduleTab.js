import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text } from 'native-base'

class ScheduleTab extends React.Component {
    render() {
        return (
            <React.Fragment>
            <TouchableOpacity style={{marginHorizontal:10, borderWidth: 1}}>
                <Text>5/8 18:00 이벤트 제목</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal:10, borderWidth: 1}}>
                <Text>5/9 10:00 상대팀 이름</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal:10, borderWidth: 1}}>
                <Text>5/10 12:00 이벤트 제목</Text>
            </TouchableOpacity>
            </React.Fragment>
        )
    }
}

export default ScheduleTab