import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Container, Content, Text, Tabs, Tab, Icon, Left, Right, H3, List, ListItem, Card, CardItem, Thumbnail, Body } from 'native-base'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import TeamHeader from '../../Components/TeamHeader'

import LoadingScreen from '../SystemScreens/LoadingScreen'
import ErrorScreen from '../SystemScreens/ErrorScreen'

class TeamDetailsScreen extends React.Component {
    render() {
        return (
            <Query 
                query={TEAM_QUERY}
                variables={{
                    id: this.props.navigation.state.params.teamId
                }}
            >
            {({ data, loading, error }) => {
                if (loading) {
                    return <LoadingScreen />
                }

                if (error) {
                    return <ErrorScreen />
                }

                return (
                    <Container>
                    <TeamHeader navigation={this.props.navigation} title={data.team.name}/>
                <Content>
                    <View style={{height: 230, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <View style={{flexDirection:"row"}}>
                            <Left style={{flexDirection: "row"}}>
                            <Text style={{borderWidth: 1}}>롤</Text>
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
                            <TouchableOpacity style={{width: "25%", height: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <Text>팀 참가</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{width: "25%", height: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
                                <Text>이벤트 초대</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Icon name="more" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Tabs scrollWithoutAnimation>
                        <Tab heading="홈">
                            <H3>팀 구성</H3>
                                <List style={{margin:0, padding: 0}}>
                                    <ListItem>
                                    <Thumbnail small source={{ uri: 'data:image/jpeg;base64,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' }} />
                                    <Body>
                                        <Text>사람 이름</Text>
                                        <Text note>(롤) 실버 탑</Text>
                                    </Body>
                                    </ListItem>
                                    <ListItem>
                                    <Thumbnail small source={{ uri: 'data:image/jpeg;base64,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' }} />
                                    <Body>
                                        <Text>사람 이름</Text>
                                        <Text note>(롤) 골드 정글</Text>
                                    </Body>
                                    </ListItem>
                                    <ListItem>
                                    <Thumbnail small source={{ uri: 'data:image/jpeg;base64,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' }} />
                                    <Body>
                                        <Text>사람 이름</Text>
                                        <Text note>(롤) 골드 미드</Text>
                                    </Body>
                                    </ListItem>
                                    <ListItem>
                                    <Thumbnail small source={{ uri: 'data:image/jpeg;base64,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' }} />
                                    <Body>
                                        <Text>사람 이름</Text>
                                        <Text note>(롤) 실버 원딜</Text>
                                    </Body>
                                    </ListItem>
                                </List>
                            <H3>모집 상태</H3>
                                <List>
                                    <ListItem>
                                        <Text>티어</Text>
                                        <Body style={{flexDirection: "row"}}>
                                            <Text style={{color: "gray"}}>다이아</Text>
                                            <Text style={{color: 'gray'}}>플래티넘</Text>
                                            <Text>골드</Text>
                                            <Text>실버</Text>
                                            <Text style={{color: 'gray'}}>브론즈</Text>
                                        </Body>
                                    </ListItem>
                                    <ListItem>
                                        <Text>역할</Text>
                                        <Body style={{flexDirection: "row"}}>
                                            <Text style={{color: "gray"}}>탑</Text>
                                            <Text>정글</Text>
                                            <Text style={{color: 'gray'}}>미드</Text>
                                            <Text style={{color: 'gray'}}>원딜</Text>
                                            <Text>서포터</Text>
                                        </Body>
                                    </ListItem>
                                </List>
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                                <H3 style={{margin: 10}}>칭찬</H3>
                                <Text style={{color: 'blue' }}>더 보기</Text>
                            </TouchableOpacity>
                                <Card>
                                    <CardItem>
                                        <Left>
                                        <Thumbnail square size={80} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYaGZT2dBRQpjlRK0qZaraVPMTmYIPXZ8TaFSWtty_u6aK0yo" }} />
                                        <Body>
                                            <Text>팀 이름 - 사람 이름</Text>
                                            <Text note>05/04 롤 연습 경기</Text>
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
                                        <Thumbnail square size={80} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYaGZT2dBRQpjlRK0qZaraVPMTmYIPXZ8TaFSWtty_u6aK0yo" }} />
                                        <Body>
                                            <Text>팀 이름 - 사람 이름</Text>
                                            <Text note>05/04 롤 연습 경기</Text>
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
                                        <Thumbnail square size={80} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYaGZT2dBRQpjlRK0qZaraVPMTmYIPXZ8TaFSWtty_u6aK0yo" }} />
                                        <Body>
                                            <Text>팀 이름 - 사람 이름</Text>
                                            <Text note>05/04 롤 연습 경기</Text>
                                        </Body>
                                        </Left>
                                    </CardItem>
                                    <CardItem cardBody style={{marginHorizontal: 20}}>
                                        <Text><Text style={{color: "red"}}>(매너좋음)</Text>동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록</Text>
                                    </CardItem>
                                </Card>
                        </Tab>
                        <Tab heading="멤버">
                            <Text>참가자1</Text>
                            <Text>참가자2</Text>
                            <Text>참가자3</Text>
                        </Tab>
                        <Tab heading="일정">
                            <TouchableOpacity style={{marginHorizontal:10, borderWidth: 1}}>
                            <Text>5/8 18:00 이벤트 제목</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginHorizontal:10, borderWidth: 1}}>
                            <Text>5/9 10:00 상대팀 이름</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginHorizontal:10, borderWidth: 1}}>
                            <Text>5/10 12:00 이벤트 제목</Text>
                            </TouchableOpacity>
                        </Tab>
                        <Tab heading="기록">
                            <TouchableOpacity style={{marginHorizontal:10, borderWidth: 1}}>
                            <Text>(이벤트) 5/1 이벤트 이름 16강</Text>
                            <Text note>(매너좋음) 매너좋은팀임 - 사람이름</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginHorizontal:10, borderWidth: 1}}>
                            <Text>(친선) 4/28 팀 이름 0:3 패배</Text>
                            <Text note>(유쾌함) ㅋㅋㅋ - 사람이름</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginHorizontal:10, borderWidth: 1}}>
                            <Text>(친선) 4/27 팀 이름</Text>
                            <Text note>(열정적) 밥먹자 - 사람이름</Text>
                            </TouchableOpacity>
                        </Tab>
                    </Tabs>
                </Content>
                </Container>
                )
            }}
            </Query>
        )
    }
}

const TEAM_QUERY = gql`
query teamQuery($id: ID!) {
    team(id: $id) {
        id
        name
        logoUrl
        members {
            id
            name
        }
    }
}
`

export default TeamDetailsScreen