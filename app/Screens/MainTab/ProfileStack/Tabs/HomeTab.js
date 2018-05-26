import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { H2, H3, Text, ListItem, Thumbnail, Body, List, Card, CardItem, Left } from 'native-base'

import InterestList from '../../../../Components/Interest/InterestList'

class HomeTab extends React.Component {
    render() {
        return (
            <React.Fragment>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <H2 style={{margin: 10}}>관심사</H2>
                <TouchableOpacity>
                    <Text style={{color: 'blue' }}>관심사 추가</Text>
                </TouchableOpacity>
            </View>
            {this.props.interests.length !== 0 ? 
            this.props.interests.map(interest => {
                return (
                    <InterestList 
                        key={interest.id}
                        interest={interest} 
                    />
                )
            }) :
            <H3 style={{textAlign: 'center', margin: 10}}>아직 없습니다</H3>
            }
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
            <H3 style={{margin: 10}}>칭찬</H3>
            <Text style={{color: 'blue' }}>더 보기</Text>
            </TouchableOpacity>
            <Card>
                <CardItem>
                    <Left>
                    <Thumbnail square size={80} source={{ uri: "https://cdn3.iconfinder.com/data/icons/black-easy/512/535106-user_512x512.png" }} />
                    <Body>
                        <Text>사람 이름</Text>
                        <Text note>05/04 롤 자유랭크</Text>
                    </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody style={{marginHorizontal: 20}}>
                    <Text><Text style={{color: "red"}}>(매너좋음)</Text>동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록</Text>
                </CardItem>
            </Card>
            <Card>
                <CardItem>
                    <Left>
                    <Thumbnail square size={80} source={{ uri: "https://cdn3.iconfinder.com/data/icons/black-easy/512/535106-user_512x512.png" }} />
                    <Body>
                        <Text>사람 이름</Text>
                        <Text note>05/04 롤 자유랭크</Text>
                    </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody style={{marginHorizontal: 20}}>
                    <Text><Text style={{color: "red"}}>(매너좋음)</Text>동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록</Text>
                </CardItem>
            </Card>
            <Card>
                <CardItem>
                    <Left>
                    <Thumbnail square size={80} source={{ uri: "https://cdn3.iconfinder.com/data/icons/black-easy/512/535106-user_512x512.png" }} />
                    <Body>
                        <Text>사람 이름</Text>
                        <Text note>05/04 롤 자유랭크</Text>
                    </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody style={{marginHorizontal: 20}}>
                    <Text><Text style={{color: "red"}}>(매너좋음)</Text>동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록</Text>
                </CardItem>
            </Card>
            </React.Fragment>
        )
    }
}

export default HomeTab