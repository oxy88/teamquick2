import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { H2, H3, Text } from 'native-base'

class HomeTab extends React.Component {
    render() {
        return (
            <React.Fragment>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <H2 style={{margin: 10}}>주제별 프로필</H2>
            </View>
            {this.props.interests.length !== 0 ? 
            this.props.interests.map(interest => {
                return (
                    <View key={interest.id} style={{flexDirection: "row"}}>
                        <Text>{interest.category}</Text>
                        <Text> {interest.description}</Text>
                    </View>
                )
            }) :
            <H3 style={{textAlign: 'center', margin: 10}}>아직 없습니다</H3>
            }
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <H2 style={{margin: 10}}>칭찬</H2>
            </View>
            <H3 style={{textAlign: 'center', margin: 10}}>아직 없습니다</H3>
            </React.Fragment>
        )
    }
}

export default HomeTab