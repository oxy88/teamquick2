import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Text, Left, Right, Icon, Thumbnail } from 'native-base'
import { withNavigation } from 'react-navigation'

class ProfileMenu extends React.Component {
    render() {
        return (
            <View style={{height: 200, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{flexDirection:"row"}}>
                    <Left style={{flexDirection: "row"}}>
                    <Text style={{borderWidth: 1}}>팀 구함</Text>
                    </Left>
                    <Right>
                    <Text style={{borderWidth: 1}}>서울</Text>
                    </Right>
                </View>
                <Thumbnail source={{uri: this.props.myProfile.avatarUrl}}/>
                <View style={{flexDirection:"row", alignItems: 'center'}}>
                    <Icon name="heart" />  
                    <Text> 500</Text>
                    <View style={{justifyContent: 'center', alignItems: 'center', width: 70, height: 30, borderRadius: 30, borderWidth: 1, margin: 5}}>
                        <Text>협조적</Text>
                    </View>
                </View>
                <Text>{this.props.myProfile.introduction}</Text>
                <View style={{marginTop: 10, width: "95%", flexDirection:"row", justifyContent: 'space-around', alignItems: 'center'}}>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('DirectMessageList')}
                    style={{width: "25%", height: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>귓속말</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('EditIntroduction', { introduction: this.props.myProfile.introduction})}
                    style={{width: "25%", height: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>소개 편집</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="more" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default withNavigation(ProfileMenu)