import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Left, Right, Text, Icon } from 'native-base'
import { withNavigation } from 'react-navigation'

class MyTeamMenu extends React.Component {
    render() {
        const { team } = this.props
        console.log(team)
        return (
            <View style={{height: 230, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection:"row"}}>
                <Left style={{flexDirection: "row"}}>
                <Text style={{borderWidth: 1}}>{team.category}</Text>
                <Text style={{borderWidth: 1, marginLeft: 10}}>모집중</Text>
                </Left>
                <Right>
                <Text style={{borderWidth: 1}}>서울</Text>
                </Right>
            </View>
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
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('TeamChat')}
                    style={{width: "25%", height: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}
                >
                    <Text>팀 채팅방</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width: "25%", height: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>팀원 초대</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name="more" />
                </TouchableOpacity>
            </View>
            </View>           
        )
    }
}

export default withNavigation(MyTeamMenu)