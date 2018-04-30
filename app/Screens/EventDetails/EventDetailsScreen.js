import React from 'react'
import { View } from 'react-native'
import { Content, Text, Tabs, Tab } from 'native-base'

import EventHeader from '../../Components/EventHeader'

class EventDetailsScreen extends React.Component {
    render() {
        return (
            <Content>
                <EventHeader navigation={this.props.navigation}/>
                <View style={{height: 200, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>이벤트 포스터</Text>
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
                    <Tab heading="참가자">
                        <Text>참가자1</Text>
                        <Text>참가자2</Text>
                        <Text>참가자3</Text>
                    </Tab>
                </Tabs>
            </Content>
        )
    }
}

export default EventDetailsScreen