import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Header, Container, Content, Tabs, Tab, Text, Button } from 'native-base'

import MainHeader from '../../Components/MainHeader'

class LikeMainScreen extends React.Component {
    render() {
        return (
            <Content>
                <MainHeader navigation={this.props.navigation}/>
                <Tabs scrollWithoutAnimation>
                    <Tab heading="이벤트">
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('EventDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>이벤트1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('EventDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>이벤트2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('EventDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>이벤트3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('EventDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>이벤트4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('EventDetails')}
                        style={{width: "90%", height: 100, margin: 10, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>이벤트5</Text>
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
        )
    }
}

export default LikeMainScreen