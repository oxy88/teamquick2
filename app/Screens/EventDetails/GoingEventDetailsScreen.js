import React from 'react'
import { View, Image } from 'react-native'
import { Container, Content, Text, Tabs, Tab, Button, ScrollableTab, H2, H3 } from 'native-base'

import EventHeader from '../../Components/EventHeader'

class GoingEventDetailsScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isTournament: true
        }
    }

    render() {
        return (
            <Container>
                <EventHeader navigation={this.props.navigation}/>
            <Content>
                <View style={{height: 200, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Image 
                    style={{ width: "100%", height: "100%" }}
                    resizeMode="stretch"
                    source={{uri: "https://a.b9.to/uploads/189/1898e01b-0796-443d-b0bc-00ee42b1c8ad.png" }} />
                </View>
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
                        <Text>온라인</Text>
                        <H3 style={{margin: 10}}>종목</H3>
                        <Text>롤</Text>
                        <H3 style={{margin: 10}}>유형</H3>
                        <Text>토너먼트</Text>
                        <View style={{borderBottomWidth: 1, marginVertical: 20}}></View>
                        <H2>룰</H2>
                        <H3 style={{margin: 10}}>룰1</H3>
                        <Text>블라블라</Text>
                        <H3 style={{margin: 10}}>룰2</H3>
                        <Text>블라블라</Text>
                        <H3 style={{margin: 10}}>룰3</H3>
                        <Text>블라블라</Text>
                    </Tab>
                    <Tab heading="대진표">
                        <Text>대진표는 시작해야 생긴당</Text>
                    </Tab>
                    <Tab heading="참가자">
                        <Text>팀1</Text>
                        <Text>팀2</Text>
                        <Text>팀3</Text>
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

export default GoingEventDetailsScreen