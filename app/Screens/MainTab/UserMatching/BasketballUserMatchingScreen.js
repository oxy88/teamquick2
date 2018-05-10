import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Container, Content, Text, Right, Icon } from 'native-base'
import CommonHeader from '../../../Components/CommonHeader'

class BasketballUserMatchingScreen extends React.Component {
    render() {
        return (
            <Container>
                <CommonHeader navigation={this.props.navigation} title="농구 개인"/>
            <Content>
                <View style={{paddingHorizontal: 20, flexDirection: "row", backgroundColor: 'white', height: 50, alignItems: 'center', justifyContent: 'center'}}>
                    <Text>지금 설정된 필터 같은 느낌</Text>
                    <Right>
                        <TouchableOpacity onPress={() => alert('필터같은 느낌')}>
                        <Icon name="options" />
                        </TouchableOpacity>
                    </Right>
                </View>
                <TouchableOpacity
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>농구킹 홍대점 5:5 개인전참가 같은 느낌</Text>
                    <Text note>5/5 18:00 서울시 마포구 어쩌구길</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>스타필드 고양 스포츠몬스터 3:3 농구 같은 느낌</Text>
                    <Text note>5/1 10:00 경기도 고양시 어쩌구길</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>안산 어쩌구 농구장 5:5 같은 느낌</Text>
                    <Text note>5/3 20:00 경기도 안산시 단원구 머시기길</Text>
                </TouchableOpacity>
            </Content>
            </Container>
        )
    }
}

export default BasketballUserMatchingScreen