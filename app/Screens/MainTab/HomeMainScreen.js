import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { H1, H2, Container, Content, Text } from 'native-base'

import MainHeader from '../../Components/MainHeader'

class HomeMainScreen extends React.Component {
    render() {
        return (
            <Container>
                <MainHeader navigation={this.props.navigation}/>
                <Content>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('UserMatching')}
                    style={{height: 50, borderWidth: 1, margin: 10}}>
                        <Text>개인 매칭</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('UserMatching')}
                    style={{height: 50, borderWidth: 1, margin: 10}}>
                        <Text>모집 중인 팀 찾기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('TeamMatching')}
                    style={{height: 50, borderWidth: 1, margin: 10}}>
                        <Text>팀 매칭</Text>
                    </TouchableOpacity>
                    <View style={{borderBottomWidth: 1, marginTop: 20, borderColor: "gray"}} />
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                        <H2 style={{margin: 10}}>이벤트</H2>
                        <Text style={{color: 'blue' }}>더 보기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: 50, borderWidth: 1, margin: 10}}>
                        <Text>이벤트1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: 50, borderWidth: 1, margin: 10}}>
                        <Text>이벤트2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{height: 50, borderWidth: 1, margin: 10}}>
                        <Text>이벤트3</Text>
                    </TouchableOpacity>
                </Content>
            </Container>
        )
    }
}

export default HomeMainScreen