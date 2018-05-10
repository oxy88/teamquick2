import React from 'react'
import { View, TouchableOpacity, Switch } from 'react-native'
import { Container, Content, Text, Tabs, Tab, Button, Icon, Left, Right, H2, H3 } from 'native-base'

import MainHeader from '../../Components/MainHeader'

class ProfileMainScreen extends React.Component {
    render() {
        return (
            <Container>
                <MainHeader navigation={this.props.navigation}/>
                <Content>
                <View style={{height: 200, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{flexDirection:"row"}}>
                        <Left style={{flexDirection: "row"}}>
                        <Text style={{borderWidth: 1}}>팀 구함</Text>
                        </Left>
                        <Right>
                        <Text style={{borderWidth: 1}}>서울</Text>
                        </Right>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 10, width: 60, height: 60, borderRadius: 60, borderWidth: 1}}>
                        <Text>프로필 사진</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems: 'center'}}>
                        <Icon name="heart" />  
                        <Text> 500</Text>
                        <View style={{justifyContent: 'center', alignItems: 'center', width: 70, height: 30, borderRadius: 30, borderWidth: 1, margin: 5}}>
                            <Text>협조적</Text>
                        </View>
                    </View>
                    <Text>본인이 입력한 프로필이에용ㅎㅎㅎ</Text>
                    <View style={{marginTop: 10, width: "95%", flexDirection:"row", justifyContent: 'space-around', alignItems: 'center'}}>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('DirectMessageList')}
                        style={{width: "25%", height: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>귓속말</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: "25%", height: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>팀 구함</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('EditIntroduction')}
                        style={{width: "25%", height: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>소개 편집</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="more" />
                        </TouchableOpacity>
                    </View>
                </View>
                <Tabs scrollWithoutAnimation>
                    <Tab heading="홈">
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <H2 style={{margin: 10}}>관심사</H2>
                            <TouchableOpacity>
                            <Text style={{color: 'blue' }}>관심사 추가</Text>
                            </TouchableOpacity>
                        </View>
                        <H3 style={{textAlign: 'center', margin: 10}}>아직 없습니다</H3>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <H2 style={{margin: 10}}>칭찬</H2>
                        </View>
                        <H3 style={{textAlign: 'center', margin: 10}}>아직 없습니다</H3>
                    </Tab>
                    <Tab heading="소속팀">
                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('MyTeamDetails')}
                        style={{height: 80, borderWidth: 1, margin: 10}}>
                            <Text>내 팀1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('MyTeamDetails')}
                        style={{height: 80, borderWidth: 1, margin: 10}}>
                            <Text>내 팀2</Text>
                        </TouchableOpacity>
                    </Tab>
                    <Tab heading="일정">
                        <H2 style={{margin: 10}}>주최</H2>
                        <Text>이벤트1</Text>
                        <Text>이벤트2</Text>
                        <H2 style={{margin: 10}}>참가</H2>
                        <Text>이벤트3</Text>
                    </Tab>
                    <Tab heading="기록">
                        <H2 style={{margin: 10}}>주최</H2>
                        <Text>이벤트1</Text>
                        <Text>이벤트2</Text>
                        <H2 style={{margin: 10}}>참가</H2>
                        <Text>이벤트3</Text>
                    </Tab>
                    <Tab heading="관리">
                        <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginVertical: 10}}>
                            <Text style={{marginLeft: 10}}>메세지 수신 거부</Text><Switch></Switch>
                        </View>
                        <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginVertical: 10}}>
                            <Text style={{marginLeft: 10}}>팀 초대 거부</Text><Switch></Switch>
                        </View>
                        <View style={{flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', marginVertical: 10}}>
                            <Text style={{marginLeft: 10}}>프로필 비공개</Text><Switch></Switch>
                        </View>
                    </Tab>
                </Tabs>
            </Content>
            </Container>
        )
    }
}

export default ProfileMainScreen