import React from 'react'
import { View, TouchableOpacity, TextInput, Switch } from 'react-native'
import { Container, H1, H3, Content, Button, Text, Input, Form, Item, Picker, Icon, Header, Left, Body, Right, Title } from 'native-base'
import DateTimePicker from 'react-native-modal-datetime-picker'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

import CommonHeader from '../../../Components/CommonHeader'
import MyPicker from '../../../Components/MyPicker'

class AddEventScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            eventCategory: 'LOL',
            eventType: 'TOURNAMENT',
            dateTime: {
                year: null,
                month: null,
                date: null,
                hours: null,
                minutes: null,
            },
            place: {
                description: "",
                directDescription: "",
                lat: null,
                lng: null
            },
            showDate: false,
            showTime: false,
            isOnline: true,
        }
        this.onValueChange = this.onValueChange.bind(this)
        this._setCategory = this._setCategory.bind(this)
        this._handleDatePicked = this._handleDatePicked.bind(this)
        this._handleTimePicked = this._handleTimePicked.bind(this)
        this._selectPlace = this._selectPlace.bind(this)
    }

    onValueChange(key, value) {
        this.setState({
          [key]: value
        });
    }

    _setCategory(eventCategory) {
        this.setState({ eventCategory })
    }

    _handleDatePicked(fullDate) {
        const dateObject = {
            year: fullDate.getFullYear(),
            month: fullDate.getMonth(),
            date: fullDate.getDate()
        }

        this.setState({ 
            dateTime: {
                ...this.state.dateTime,
                ...dateObject
            },
            showDate: false
        })
    }

    _handleTimePicked(fullTime) {
        const timeObject = {
            hours: fullTime.getHours(),
            minutes: fullTime.getMinutes()
        }

        this.setState({ 
            dateTime: {
                ...this.state.dateTime,
                ...timeObject
            },
            showTime: false
        })
    }

    _dateTimeToDate = (fullDate) => {
        if (fullDate.year === null || fullDate.month === null || fullDate.date === null) {
            return "날짜"
        } else {
            return `${fullDate.year}년 ${fullDate.month + 1}월 ${fullDate.date}일`
        }
    }

    _dateTimeToTime = (fullDate) => {
        if (fullDate.hours === null || fullDate.minutes === null) {
            return "시간"
        }
        return `${fullDate.hours < 12 ? "오전 " + fullDate.hours : "오후 " + (fullDate.hours - 12)}:${fullDate.minutes < 10 ? "0" + fullDate.minutes : fullDate.minutes}`
    }
    
    _selectPlace(place) {
        this.setState({
            place: {
                description: place.description,
                lat: place.lat,
                lng: place.lng
            },
            isOnline: false
        })
    }

    render() {
        const EVENT_TYPE_LIST = ["TOURNAMENT", "LEAGUE", "ETC"]
        console.log(this.state.isOnline)
        return (
            <Mutation 
                mutation={CREATE_EVENT_MUTATION}
            >
            {( createEvent, { loading, error }) => {
                return (
                    <Container>
                    <CommonHeader navigation={this.props.navigation} title="이벤트 만들기"/>
                <Content>
                    <H3 style={{margin: 10}}>이벤트 이름</H3>
                        <Input 
                        onChangeText={(text) => this.setState({ name: text })}
                        style={{backgroundColor: 'white'}} 
                    />
                    <H3 style={{margin: 10}}>이벤트 주제</H3>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate('SelectCategory', { _setCategory: this._setCategory })}
                            style={{backgroundColor: 'white', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                                <Text>{this.state.eventCategory}</Text>
                        </TouchableOpacity>
                    <MyPicker
                        propName="eventType"
                        currentProp={this.state.eventType}
                        options={EVENT_TYPE_LIST}
                        onValueChange={(value) => this.onValueChange("eventType", value)}
                    />
                    <H3 style={{margin: 10}}>시작 시간</H3>
                    <View style={{flexDirection: "row"}}>
                        <TouchableOpacity 
                            onPress={() => this.onValueChange('showDate', true)}
                            style={{flex: 0.5, backgroundColor: 'white', height: 50, alignItems: 'center', justifyContent: 'center', borderRightWidth: 1}}
                        >
                            <Text>{this._dateTimeToDate(this.state.dateTime)}</Text>
                        </TouchableOpacity>
                        <DateTimePicker
                            isVisible={this.state.showDate}
                            onConfirm={(date) => this._handleDatePicked(date)}
                            onCancel={() => this.onValueChange('showDate', false)}
                            titleIOS="날짜 선택"
                            cancelTextIOS="취소"
                            confirmTextIOS="확인"
                            minimumDate={new Date()}
                            maximumDate={new Date(Date.now() + 1000 * 60 * 60 * 24 * 365)}
                            locale="ko"
                        />
                        <TouchableOpacity 
                            onPress={() => this.onValueChange('showTime', true)}
                            style={{flex: 0.5, backgroundColor: 'white', height: 50, alignItems: 'center', justifyContent: 'center'}}>
                            <Text>{this._dateTimeToTime(this.state.dateTime)}</Text>
                        </TouchableOpacity>
                        <DateTimePicker
                            isVisible={this.state.showTime}
                            onConfirm={(time) => this._handleTimePicked(time)}
                            onCancel={() => this.onValueChange('showTime', false)}
                            mode="time"
                            cancelTextIOS="취소"
                            confirmTextIOS="확인"
                            titleIOS="시간 선택"
                            locale="ko"
                        />
                    </View>
                    <H3 style={{margin: 10}}>장소</H3>
                        <TouchableOpacity 
                            style={{paddingHorizontal: 20, backgroundColor: 'white', height: 50, justifyContent: 'center', alignItems: 'center', flexDirection: "row", borderBottomWidth: 1}}
                        >
                            <Text>온라인</Text>
                            <Right><Switch value={this.state.isOnline} onValueChange={(value) => {
                                if (value) {
                                    this.setState({ place: { ...this.state.place, description: "", directDescription: "" } })
                                }
                                if (!value) {
                                    return
                                }
                                this.setState({ isOnline: value })
                                }} /></Right>
                        </TouchableOpacity>
                        <TouchableOpacity >
                        <Input style={{backgroundColor: 'white'}} placeholder="장소명 직접 입력" value={this.state.place.directDescription} onChangeText={text => {
                                this.state.isOnline ? this.setState({ isOnline: false }) : null
                                this.setState({ place: { ...this.state.place, directDescription: text } })
                            }}/>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate('SelectPlace', { _selectPlace: this._selectPlace })}
                            style={{backgroundColor: 'white', height: 50, justifyContent: 'center', alignItems: 'center'}}
                        >
                            <Text>{this.state.place.description ? this.state.place.description : "지도에서 찾기"}</Text>
                        </TouchableOpacity>
                    <Button 
                    onPress={async () => {
                        const { year, month, date, hours, minutes } = this.state.dateTime
                        const fullDate = new Date(year, month, date, hours, minutes).toISOString()
                        await createEvent({
                            variables: {
                                name: this.state.name,
                                category: this.state.eventCategory,
                                type: this.state.eventType,
                                startTime: fullDate,
                                description: !this.state.place.directDescription ? this.state.place.description : this.state.place.directDescription,
                                lat: this.state.place.lat,
                                lng: this.state.place.lng
                            }
                        })
                        this.props.navigation.navigate('MainTab')
                    }}
                    block style={{marginTop: 10}}>
                        <Text>만들기</Text>
                    </Button>
                </Content>
                </Container>
                )
            }}
            </Mutation>
        )
    }
}

const CREATE_EVENT_MUTATION = gql`
mutation createEventMutation($name: String, $category: Category!, $type: EventType!, $startTime: DateTime, $description: String, $lat: Float, $lng: Float) {
    createEvent(
        name: $name
        category: $category
        type: $type
        startTime: $startTime
        description: $description
        lat: $lat
        lng: $lng
    ) {
        id
        name
        iconUrl
    }
}
`

export default AddEventScreen