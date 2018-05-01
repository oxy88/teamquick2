import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Content, Text, H1, H3, Header, Left, Button, Icon, Body, Title, Right, Form, Picker, Item } from 'native-base'

class TeamMatchingScreen extends React.Component {
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
            <Content>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.dispatch({ type: 'Navigation/BACK'})}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>팀 매칭</Title>
                    </Body>
                    <Right />
                </Header>
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
          <TouchableOpacity 
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>선택된 팀에 적합한 팀 매칭 추천1</Text>
          </TouchableOpacity>
          <TouchableOpacity 
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>선택된 팀에 적합한 팀 매칭 추천2</Text>
          </TouchableOpacity>
          <TouchableOpacity 
                style={{height: 50, borderWidth: 1, margin: 10}}>
                    <Text>선택된 팀에 적합한 팀 매칭 추천3</Text>
          </TouchableOpacity>
        </Content>
        )
    }
}

export default TeamMatchingScreen