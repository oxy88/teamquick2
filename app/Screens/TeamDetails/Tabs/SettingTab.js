import React from 'react'
import { Button, Text } from 'native-base'

class SettingTab extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Button block style={{margin: 10}}>
                    <Text>팀원 모집하기</Text>
                </Button>
                <Button block style={{margin: 10}}>
                    <Text>팀 없애기</Text>
                </Button>
                <Button block style={{margin: 10}}>
                    <Text>팀 나가기</Text>
                </Button>
            </React.Fragment>
        )
    }
}

export default SettingTab