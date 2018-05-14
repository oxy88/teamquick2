import React from 'react'
import { View, TouchableOpacity, TextInput } from 'react-native'
import { Container, H1, H3, Content, Button, Text, Input, Form, Item, Picker, Icon, Header, Left, Body, Right, Title } from 'native-base'

import CommonHeader from '../../../Components/CommonHeader'

class AddEventScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            eventCategory: '롤',
            eventType: 'tournament',
            eventOptions: {},
        }
        this.onValueChange = this.onValueChange.bind(this)
        this._setCategory = this._setCategory.bind(this)
        this._setEventType = this._setEventType.bind(this)
        this._setEventOptions = this._setEventOptions.bind(this)
    }

    onValueChange(key, value) {
        this.setState({
          [key]: value
        });
    }

    _setCategory(eventCategory) {
        this.setState({ eventCategory })
    }

    _setEventType(eventType) {
        this.setState({ eventType })
    }

    _setEventOptions(eventOptions) {
        this.setState({ eventOptions })
    }

    render() {
        return (
            <Container>
                <CommonHeader navigation={this.props.navigation} title="이벤트 만들기"/>
            <Content>
                <H3 style={{margin: 10}}>이벤트 이름</H3>
                    <Input style={{backgroundColor: 'white'}} />
                <H3 style={{margin: 10}}>이벤트 주제</H3>
                    <TouchableOpacity 
                        onPress={() => this.props.navigation.navigate('SelectCategory', { _setCategory: this._setCategory })}
                        style={{backgroundColor: 'white', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                            <Text>{this.state.eventCategory}</Text>
                    </TouchableOpacity>
                <H3 style={{margin: 10}}>이벤트 유형</H3>
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
                                <Title>이벤트 유형 선택</Title>
                            </Body>
                            <Right />
                        </Header>
                    }
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: "100%", backgroundColor: "white" }}
                    itemStyle={{ justifyContent: 'space-between' }}
                    selectedValue={this.state.eventType}
                    onValueChange={(value) => this.onValueChange("eventType", value)}
                    >
                    <Picker.Item label="토너먼트" value="tournament" />
                    <Picker.Item label="리그" value="league" />
                    <Picker.Item label="개인 참가" value="individualEvent" />
                    <Picker.Item label="기타" value="etcEvent" />
                    </Picker>
                    </Form>
                <H3 style={{margin: 10}}>이벤트 설명</H3>
                    <Input multiline style={{backgroundColor: 'white', height: 80}} />
                <H3 style={{margin: 10}}>고급 설정</H3>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('SelectEventOptions', { _setEventOptions: this._setEventOptions })}
                    style={{backgroundColor: 'white', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>고급 설정</Text>
                </TouchableOpacity>
                <Button 
                onPress={() => this.props.navigation.navigate('App')}
                block style={{marginTop: 10}}>
                    <Text>만들기</Text>
                </Button>
            </Content>
            </Container>
        )
    }
}

export default AddEventScreen