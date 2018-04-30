import React from 'react'
import { Content, Text, H1, H2 } from 'native-base'
import MainHeader from '../../../Components/MainHeader'

class TeamMatchingScreen extends React.Component {
    render() {
        return (
            <Content>
                <MainHeader />
                <H1 style={{margin: 10}}>팀 매칭</H1>
                <H2 style={{margin: 10}}>팀 선택</H2>
            </Content>
        )
    }
}

export default TeamMatchingScreen