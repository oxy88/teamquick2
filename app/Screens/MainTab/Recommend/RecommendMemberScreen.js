import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, Content, Text, H1, H3, Header, Left, Button, Icon, Body, Title, Right, Form, Picker, Item } from 'native-base'
import { Query } from 'react-apollo'

import LoadingScreen from '../../SystemScreens/LoadingScreen'
import ErrorScreen from '../../SystemScreens/ErrorScreen'

import UserList from '../../../Components/User/UserList'

import USERS_QUERY from '../../../Query/USERS_QUERY'

class RecommendMemberScreen extends React.Component {
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
            <Query query={USERS_QUERY}>
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
                            <Title>맞춤 팀원 찾기</Title>
                        </Body>
                        <Right />
                    </Header>
                <Content>
                    <H3 style={{margin: 10}}>팀 선택</H3>
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
                  <Item label="내 축구팀" value={0} />
                  <Item label="내 배그팀" value={1} />
                  <Item label="내 농구팀" value={2} />
                </Picker>
              </Form>
              {data.users.map(user => {
                  return (
                      <UserList
                        key={user.id}
                        user={user}
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

export default RecommendMemberScreen