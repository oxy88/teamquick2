import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Header, Container, Content, Tabs, Tab, Text, Button } from 'native-base'

import MainHeader from '../../Components/MainHeader'

class LikeMainScreen extends React.Component {
    render() {
        return (
            <Container>
                <MainHeader navigation={this.props.navigation}/>
            <Content>
                <Tabs scrollWithoutAnimation>
                    <Tab heading="이벤트">
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('EventDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>남의 이벤트</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('GoingEventDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>참가중인 이벤트</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('MyEventDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>주최중인 이벤트</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('UserMatchingEventDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>개인매칭 이벤트</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('OneOnOneEventDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>1대1팀전 이벤트</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('EventDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>이벤트6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('EventDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>이벤트7</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('EventDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>이벤트8</Text>
                        </TouchableOpacity>
                    </Tab>
                    <Tab heading="팀">
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('TeamDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>팀1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('TeamDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>팀2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('TeamDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>팀3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('TeamDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>팀4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('EventDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>팀5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('EventDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>팀6</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('EventDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>팀7</Text>
                        </TouchableOpacity>
                    </Tab>
                    <Tab heading="사람">
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('UserDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>사람1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('UserDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>사람2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('UserDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>사람3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('UserDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>사람4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('UserDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>사람5</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('UserDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>사람6</Text>
                        </TouchableOpacity>
                    </Tab>
                </Tabs>
            </Content>
            </Container>
        )
    }
}

export default LikeMainScreen