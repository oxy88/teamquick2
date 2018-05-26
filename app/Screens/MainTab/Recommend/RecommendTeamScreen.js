import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, Content, Text, H1, H3, Header, Left, Button, Icon, Body, Title, Right, Form, Picker, Item } from 'native-base'
import { Query } from 'react-apollo'

import TeamList from '../../../Components/Team/TeamList'

import LoadingScreen from '../../SystemScreens/LoadingScreen'
import ErrorScreen from '../../SystemScreens/ErrorScreen'

import TEAMS_QUERY from '../../../Query/TEAMS_QUERY'

class RecommendTeamScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            teamIndex: 0
        }
        this.onValueChange = this.onValueChange.bind(this)
    }
  
    onValueChange(key, value) {
      this.setState({
        [key]: value
      });
    }

    render() {
        return (
            <Query query={TEAMS_QUERY}>
            {({ data, loading, error }) => {
                if (loading) {
                    return <LoadingScreen />
                }
                if (error) {
                    return <ErrorScreen />
                }
                return (
                    <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => this.props.navigation.dispatch({ type: 'Navigation/BACK'})}>
                                <Icon name="arrow-back" />
                            </Button>
                        </Left>
                        <Body>
                            <Title>맞춤 팀 찾기</Title>
                        </Body>
                        <Right />
                    </Header>
                <Content>
                    <H3 style={{margin: 10}}>내 프로필 선택</H3>
                <Form>
                <Picker
                  renderHeader={backAction =>
                    <Header>
                        <Left>
                            <Button transparent onPress={backAction}>
                                <Icon name="arrow-back" />
                            </Button>
                        </Left>
                        <Body>
                            <Title>팀 선택</Title>
                        </Body>
                        <Right />
                    </Header>
                  }
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: "100%", backgroundColor: 'white' }}
                  itemStyle={{ justifyContent: 'space-between' }}
                  selectedValue={this.state.teamIndex}
                  onValueChange={(value) => this.onValueChange("teamIndex", value)}
                >
                  <Item label="롤 - hide on bush 실버3 정글" value={0} />
                  <Item label="축구 - 수비" value={1} />
                  <Item label="농구 - 센터" value={2} />
                </Picker>
              </Form>
              {data.teams.map(team => {
                  return (
                      <TeamList
                        key={team.id}
                        team={team}
                        navigation={this.props.navigation}
                      />
                  )
              })}
            </Content>
            </Container>
            )
            }}
        </Query>
        )
    }
}

export default RecommendTeamScreen