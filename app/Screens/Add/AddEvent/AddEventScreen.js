import React from 'react'
import { View, TouchableOpacity, TextInput } from 'react-native'
import { Container, H1, H3, Content, Button, Text, Input, Form, Item, Picker, Icon, Header, Left, Body, Right, Title } from 'native-base'
import DateTimePicker from 'react-native-modal-datetime-picker'

import CommonHeader from '../../../Components/CommonHeader'
import MyPicker from '../../../Components/MyPicker'

class AddEventScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            eventCategory: '롤',
            eventType: 'TOURNAMENT',
            dateTime: {
                year: 0,
                month: 0,
                date: 0,
                hours: 0,
                minutes: 0
            },
            place: "online",
            showDate: false,
            showTime: false
        }
        this.onValueChange = this.onValueChange.bind(this)
        this._setCategory = this._setCategory.bind(this)
        this._handleDatePicked = this._handleDatePicked.bind(this)
        this._handleTimePicked = this._handleTimePicked.bind(this)
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
            hours: fullTime.getHours().toString(),
            minutes: fullTime.getMinutes().toString()
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
        return fullDate.year === 0 || fullDate.month + 1 === 0 || fullDate.date === 0 ? "날짜" : `${fullDate.year}년 ${fullDate.month + 1}월 ${fullDate.date}일`
    }

    _dateTimeToTime = (fullDate) => {
        let isAM = true
        if (fullDate.hours > 12) {
            fullDate.hours = fullDate.hours - 12
            isAM = false
        }

        if (fullDate.minutes == 0) {
            fullDate.minutes = "00"
        }

        return fullDate.hours === 0 || !fullDate.minutes === 0 ? "시간" : `${isAM ? "오전" : "오후"} ${fullDate.hours}:${fullDate.minutes}`
    }

    render() {
        const EVENT_TYPE_LIST = ["TOURNAMENT", "LEAGUE", "ETC"]

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
                        titleIOS="시간 선택"
                        locale="ko"
                    />
                </View>
                <H3 style={{margin: 10}}>장소</H3>
                    <TouchableOpacity style={{backgroundColor: 'white', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>장소</Text>
                    </TouchableOpacity>
                <Button 
                onPress={() => this.props.navigation.navigate('MainTab')}
                block style={{marginTop: 10}}>
                    <Text>만들기</Text>
                </Button>
            </Content>
            </Container>
        )
    }
}

export default AddEventScreen