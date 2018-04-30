import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { H1, H2, Content, Text } from 'native-base'

import MainHeader from '../../Components/MainHeader'

class HomeMainScreen extends React.Component {
    render() {
        return (
            <Content>
                <MainHeader navigation={this.props.navigation}/>
                <H1 style={{margin: 10}}>매칭</H1>
                <TouchableOpacity style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>개인 매칭</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>팀 매칭</Text>
                </TouchableOpacity>
                <View style={{borderBottomWidth: 1, marginTop: 20, borderColor: "gray"}} />
                <H1 style={{margin: 10, marginTop: 50}}>추천</H1>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                    <H2 style={{margin: 10}}>추천 이벤트</H2>
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
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                    <H2 style={{margin: 10}}>추천 팀</H2>
                    <Text style={{color: 'blue' }}>더 보기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>팀1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>팀2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>팀3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                    <H2 style={{margin: 10}}>추천 팀원</H2>
                    <Text style={{color: 'blue' }}>더 보기</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>유저1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>유저2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>유저3</Text>
                </TouchableOpacity>
            </Content>
        )
    }
}

export default HomeMainScreen