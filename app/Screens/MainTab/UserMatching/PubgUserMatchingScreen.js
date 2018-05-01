import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Text,
  Icon,
  Right,
  Body,
  Left,
  Picker,
  Form,
  H3,
} from "native-base";

const Item = Picker.Item;

class PubgUserMatchingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pubgType: "duo",
      pubgServer: "kakao"
    };
    this.onValueChange = this.onValueChange.bind(this)
  }

  onValueChange(key, value) {
    this.setState({
      [key]: value
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title>배그 개인 매칭</Title>
          </Body>
          <Right />
        </Header>

        <Content>
            <H3 style={{margin: 10}}>게임 유형</H3>
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
                        <Title>게임 유형 선택</Title>
                    </Body>
                    <Right />
                </Header>
              }
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: "100%", backgroundColor: 'white' }}
              itemStyle={{ justifyContent: 'space-between' }}
              selectedValue={this.state.pubgType}
              onValueChange={(value) => this.onValueChange("pubgType", value)}
            >
              <Item label="듀오" value="duo" />
              <Item label="스쿼드" value="squad" />
            </Picker>
          </Form>

          <H3 style={{margin: 10}}>서버</H3>
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
                        <Title>서버 선택</Title>
                    </Body>
                    <Right />
                </Header>
              }
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: "100%", backgroundColor: "white" }}
              itemStyle={{ justifyContent: 'space-between' }}
              selectedValue={this.state.pubgServer}
              onValueChange={(value) => this.onValueChange("pubgServer", value)}
            >
              <Item label="카카오" value="kakao" />
              <Item label="스팀" value="steam" />
            </Picker>
          </Form>
          <Button block style={{marginTop: 10}}>
              <Text>매칭 참가</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default PubgUserMatchingScreen;