import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Container, Content, Text, Tabs, Tab, Icon, Left, Right, Button } from 'native-base'

import TeamHeader from '../../Components/TeamHeader'

class MyTeamDetailsScreen extends React.Component {
    render() {
        return (
            <Container>
                <TeamHeader navigation={this.props.navigation}/>
            <Content>
                <View style={{height: 230, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flexDirection:"row"}}>
                        <Left style={{flexDirection: "row"}}>
                        <Text style={{borderWidth: 1}}>롤</Text>
                        <Text style={{borderWidth: 1, marginLeft: 10}}>모집중</Text>
                        </Left>
                        <Right>
                        <Text style={{borderWidth: 1}}>서울</Text>
                        </Right>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 10, width: 60, height: 60, borderWidth: 1}}>
                        <Text>팀 로고</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems: 'center'}}>
                        <Icon name="heart" />  
                        <Text> 100</Text>
                        <View style={{justifyContent: 'center', alignItems: 'center', width: 70, height: 30, borderRadius: 30, borderWidth: 1, margin: 5}}>
                            <Text>매너 좋음</Text>
                        </View>
                    </View>
                    <Text>팀 소개글이에용 ㅎㅎㅎㅎ</Text>
                    <View style={{marginTop: 10, width: "95%", flexDirection:"row", justifyContent: 'space-around', alignItems: 'center'}}>
                        <TouchableOpacity style={{width: "25%", height: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>메세지</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: "25%", height: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>팀 참가</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: "25%", height: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>이벤트 초대</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="more" />
                        </TouchableOpacity>
                    </View>
                </View>
                <Tabs scrollWithoutAnimation>
                    <Tab heading="홈">
                        <View style={{ height: 200, borderWidth: 1, margin: 10}}>
                            <Text>이런 저런 정보</Text>
                        </View>
                        <View style={{ height: 200, borderWidth: 1, margin: 10}}>
                            <Text>이런 저런 정보</Text>
                        </View>
                        <View style={{ height: 200, borderWidth: 1, margin: 10}}>
                            <Text>이런 저런 정보</Text>
                        </View>
                    </Tab>
                    <Tab heading="멤버">
                        <Text>참가자1</Text>
                        <Text>참가자2</Text>
                        <Text>참가자3</Text>
                    </Tab>
                    <Tab heading="일정">
                        <TouchableOpacity style={{marginHorizontal:10, borderWidth: 1}}>
                        <Text>5/8 18:00 이벤트 제목</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginHorizontal:10, borderWidth: 1}}>
                        <Text>5/9 10:00 상대팀 이름</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginHorizontal:10, borderWidth: 1}}>
                        <Text>5/10 12:00 이벤트 제목</Text>
                        </TouchableOpacity>
                    </Tab>
                    <Tab heading="기록">
                        <TouchableOpacity style={{marginHorizontal:10, borderWidth: 1}}>
                        <Text>(이벤트) 5/1 이벤트 이름 16강</Text>
                        <Text note>(매너좋음) 매너좋은팀임 - 사람이름</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginHorizontal:10, borderWidth: 1}}>
                        <Text>(친선) 4/28 팀 이름 0:3 패배</Text>
                        <Text note>(유쾌함) ㅋㅋㅋ - 사람이름</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginHorizontal:10, borderWidth: 1}}>
                        <Text>(친선) 4/27 팀 이름</Text>
                        <Text note>(열정적) 밥먹자 - 사람이름</Text>
                        </TouchableOpacity>
                    </Tab>
                    <Tab heading="관리">
                        <Button block style={{margin: 10}}>
                            <Text>팀원 모집하기</Text>
                        </Button>
                        <Button block style={{margin: 10}}>
                            <Text>팀 없애기</Text>
                        </Button>
                        <Button block style={{margin: 10}}>
                            <Text>팀 나가기</Text>
                        </Button>
                    </Tab>
                </Tabs>
            </Content>
            </Container>
        )
    }
}

export default MyTeamDetailsScreen