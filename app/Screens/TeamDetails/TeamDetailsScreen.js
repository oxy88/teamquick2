import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Content, Text, Tabs, Tab, Icon } from 'native-base'

import TeamHeader from '../../Components/TeamHeader'

class TeamDetailsScreen extends React.Component {
    render() {
        return (
            <Content>
                <TeamHeader navigation={this.props.navigation}/>
                <View style={{height: 200, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
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
                    <Tab heading="정보">
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
                </Tabs>
            </Content>
        )
    }
}

export default TeamDetailsScreen