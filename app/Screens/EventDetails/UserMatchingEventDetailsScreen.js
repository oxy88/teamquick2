import React from 'react'
import { View, Image } from 'react-native'
import { Container, Content, Text, Tabs, Tab, Button, ScrollableTab, H2, H3 } from 'native-base'

import EventHeader from '../../Components/EventHeader'

class UserMatchingEventDetailsScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isTournament: true
        }
    }

    render() {
        return (
            <Container>
                <EventHeader navigation={this.props.navigation} title="3:3 풋살 개인"/>
            <Content>
        <Tabs scrollWithoutAnimation renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="기본">
                        <Button 
                        block style={{margin: 10}}>
                            <Text>참가신청</Text>
                        </Button>
                        <Text>이벤트 주최자가 쓴 설명임ㅎㅎㅎㅎ</Text>
                        <View style={{borderBottomWidth: 1, marginVertical: 20}}></View>
                        <H3 style={{margin: 10}}>시작시간</H3>
                        <Text>5/18 13:00</Text>
                        <H3 style={{margin: 10}}>장소</H3>
                        <Text>서울시 마포구 머시기길</Text>
                        <H3 style={{margin: 10}}>종목</H3>
                        <Text>축구/풋살</Text>
                        <H3 style={{margin: 10}}>유형</H3>
                        <Text>개인 매칭</Text>
                        <View style={{borderBottomWidth: 1, marginVertical: 20}}></View>
                        <H2>룰</H2>
                        <H3 style={{margin: 10}}>룰1</H3>
                        <Text>블라블라</Text>
                        <H3 style={{margin: 10}}>룰2</H3>
                        <Text>블라블라</Text>
                        <H3 style={{margin: 10}}>룰3</H3>
                        <Text>블라블라</Text>
                    </Tab>
                    <Tab heading="참가자">
                        <Text>사람1</Text>
                        <Text>사람2</Text>
                        <Text>사람3</Text>
                        <Text>사람4</Text>
                        <Text>사람5</Text>
                        <Text>사람6</Text>
                    </Tab>
                    <Tab heading="기록">
                        <Text>기록</Text>
                    </Tab>
                </Tabs>
            </Content>
            </Container>
        )
    }
}

export default UserMatchingEventDetailsScreen