import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Content, Text, Tabs, Tab, H3, Icon } from 'native-base'

import UserHeader from '../../Components/UserHeader'

class UserDetailsScreen extends React.Component {
    render() {
        return (
            <Content>
                <UserHeader navigation={this.props.navigation}/>
                <View style={{height: 200, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 10, width: 60, height: 60, borderWidth: 1}}>
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
                        <TouchableOpacity style={{width: "25%", height: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>귓속말</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{width: "25%", height: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>팀 초대</Text>
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
                    <Tab heading="팀">
                        <Text>소속팀1</Text>
                        <Text>소속팀2</Text>
                        <Text>소속팀3</Text>
                    </Tab>
                    <Tab heading="이벤트">
                        <H3>주최 이벤트</H3>
                        <Text>주최 이벤트1</Text>
                        <Text>주최 이벤트2</Text>
                        <Text>주최 이벤트3</Text>
                        <H3>참가 이벤트</H3>
                        <Text>주최 이벤트1</Text>
                        <Text>주최 이벤트2</Text>
                        <Text>주최 이벤트3</Text>
                    </Tab>
                </Tabs>
            </Content>
        )
    }
}

export default UserDetailsScreen