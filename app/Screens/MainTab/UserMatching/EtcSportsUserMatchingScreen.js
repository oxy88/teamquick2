import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Container, Content, Text, Right, Icon } from 'native-base'
import CommonHeader from '../../../Components/CommonHeader'

class EtcSportsUserMatchingScreen extends React.Component {
    render() {
        return (
            <Container>
                <CommonHeader navigation={this.props.navigation} title="기타 스포츠 개인"/>
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
                    <Text>홍대 족구킹 4:4 하실 분</Text>
                    <Text note>5/5 18:00 서울시 마포구 어쩌구길</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>고양시 내일은 당구왕</Text>
                    <Text note>5/1 10:00 경기도 고양시 어쩌구길</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>안산시 제빵왕 김탁구</Text>
                    <Text note>5/3 20:00 경기도 안산시 단원구 머시기길</Text>
                </TouchableOpacity>
            </Content>
            </Container>
        )
    }
}

export default EtcSportsUserMatchingScreen