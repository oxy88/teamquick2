import React from 'react'
import { View, TouchableOpacity, TextInput, DatePickerAndroid, Switch } from 'react-native'
import { Container, H1, H3, Content, Button, Text, Input, Form, Item, Right, Picker, Icon, Header, Title, Left, Body } from 'native-base'
import { Query, Mutation } from 'react-apollo'
import DateTimePicker from 'react-native-modal-datetime-picker'
import gql from 'graphql-tag'

import CommonHeader from '../../../Components/CommonHeader'
import MyPicker from '../../../Components/MyPicker'
import LoadingScreen from '../../../Screens/SystemScreens/LoadingScreen'
import ErrorScreen from '../../../Screens/SystemScreens/ErrorScreen'

import MY_PROFILE_QUERY from '../../../Query/MY_PROFILE_QUERY'

class AddScrimmageScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: '주제 선택',
            selectedTeam: "",
            eventType: '유형 선택',
            eventOptions: {},
            dateTime: {
                year: 0,
                month: 0,
                date: 0,
                hours: 0,
                minutes: 0
            },
            showDate: false,
            showTime: false,
            place: {
                description: "",
                directDescription: "",
                lat: 0,
                lng: 0
            },
            isOnline: true
        }
        this._setCategory = this._setCategory.bind(this)
        this._setEventType = this._setEventType.bind(this)
        this._setEventOptions = this._setEventOptions.bind(this)
        this._handleDatePicked = this._handleDatePicked.bind(this)
        this._handleTimePicked = this._handleTimePicked.bind(this)
        this.onValueChange = this.onValueChange.bind(this)
        this._selectPlace = this._selectPlace.bind(this)
    }

    onValueChange(key, value) {
        this.setState({
            [key]: value
        })
    }

    _setCategory(category) {
        this.setState({ category })
    }

    _setEventType(eventType) {
        this.setState({ eventType })
    }

    _setEventOptions(eventOptions) {
        this.setState({ eventOptions })
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

    _selectPlace(place) {
        this.setState({
            place: {
                ...this.state.place,
                description: place.description,
                lat: place.lat,
                lng: place.lng
            },
            isOnline: false
        })
    }

    render() {
        console.log(this.state.place.directDescription)
        return (
            <Mutation mutation={CREATE_SCRIMMAGE_MUTATION}>
            {( createScrimmage, { loading: loadingCreateScrimmage, error: errorCreateScrimmage }) => (
            <Query query={MY_PROFILE_QUERY}>
            {({ data, loading: loadingMyProfile, error: errorMyProfile }) => {
                if (loadingCreateScrimmage || loadingMyProfile) {
                    return <LoadingScreen />
                }
                if (errorCreateScrimmage || errorMyProfile) {
                    return <ErrorScreen />
                }
                return (
                    <Container>
                    <CommonHeader navigation={this.props.navigation} title="연습경기 만들기"/>
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
                            selectedValue={this.state.selectedTeam}
                            onValueChange={(value) => this.onValueChange("selectedTeam", value)}
                            >
                            {data.myProfile.teams.map(team => {
                                return <Picker.Item key={team.id} label={team.name} value={team.id} />
                            })}
                            </Picker>
                        </Form>
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
                                this.setState({ place: { ...this.state.place, directDescription: text}})}
                            }/>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => this.props.navigation.navigate('SelectPlace', { _selectPlace: this._selectPlace })}
                            style={{backgroundColor: 'white', height: 50, justifyContent: 'center', alignItems: 'center'}}
                        >
                            <Text>{this.state.place.description ? this.state.place.description : "지도에서 찾기"}</Text>
                        </TouchableOpacity>
                        <Button 
                        onPress={async() => {
                            await createScrimmage({
                                variables: {
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
            </Query>
            )}
            </Mutation>
        )
    }
}

const CREATE_SCRIMMAGE_MUTATION = gql`
mutation createScrimmageMutation($hostTeamId: ID!, $startTime: DateTime!, $description: String, $lat: Float, $lng: Float) {
    createScrimmage(
        hostTeamId: $hostTeamId
        startTime: $startTime
        description: $description
        lat: $lat
        lng: $lng
    ) {
        id
        name
        category
        type
        startTime
        place {
            description
            lat
            lng
        }
        iconUrl
    }
}
`

export default AddScrimmageScreen