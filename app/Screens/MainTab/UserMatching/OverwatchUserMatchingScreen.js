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

class OverwatchUserMatchingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overwatchType: "competitive",
      overwatchTier: "gold",
      overwatchRole: "fill"
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
            <Title>오버워치 개인 매칭</Title>
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
              selectedValue={this.state.overwatchType}
              onValueChange={(value) => this.onValueChange("overwatchType", value)}
            >
              <Item label="경쟁전" value="competitive" />
              <Item label="빠른대전" value="quick" />
            </Picker>
          </Form>

          <H3 style={{margin: 10}}>티어</H3>
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
                        <Title>티어 선택</Title>
                    </Body>
                    <Right />
                </Header>
              }
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: "100%", backgroundColor: "white" }}
              itemStyle={{ justifyContent: 'space-between' }}
              selectedValue={this.state.overwatchTier}
              onValueChange={(value) => this.onValueChange("overwatchTier", value)}
            >
              <Item label="브론즈" value="bronze" />
              <Item label="실버" value="silver" />
              <Item label="골드" value="gold" />
              <Item label="플레티넘" value="platinum" />
              <Item label="다이아 이상" value="diamond" />
            </Picker>
          </Form>

          <H3 style={{margin: 10}}>역할</H3>
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
                        <Title>역할 선택</Title>
                    </Body>
                    <Right />
                </Header>
              }
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: "100%", backgroundColor: 'white' }}
              itemStyle={{ justifyContent: 'space-between' }}
              selectedValue={this.state.overwatchRole}
              onValueChange={(value) => this.onValueChange("overwatchRole", value)}
            >
              <Item label="상관 없음" value="fill" />
              <Item label="탱커" value="tank" />
              <Item label="딜러" value="dps" />
              <Item label="힐러" value="heal" />
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

export default OverwatchUserMatchingScreen;