import React from 'react'
import { View } from 'react-native'
import { Content, Text, Tabs, Tab } from 'native-base'

import UserHeader from '../../Components/UserHeader'

class ProfileMainScreen extends React.Component {
    render() {
        return (
            <Content>
                <UserHeader navigation={this.props.navigation}/>
                <View style={{height: 200, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>유저 사진</Text>
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
                        <Text>팀1</Text>
                        <Text>팀2</Text>
                        <Text>팀3</Text>
                    </Tab>
                    <Tab heading="이벤트">
                        <Text>이벤트1</Text>
                        <Text>이벤트2</Text>
                        <Text>이벤트3</Text>
                    </Tab>
                    <Tab heading="귓속말">
                        <Text>유저1</Text>
                        <Text>유저2</Text>
                        <Text>유저3</Text>
                    </Tab>
                </Tabs>
            </Content>
        )
    }
}

export default ProfileMainScreen