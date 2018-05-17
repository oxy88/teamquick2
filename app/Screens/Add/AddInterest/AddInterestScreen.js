import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Container, Content, H3, Button, Text } from 'native-base'

import CommonHeader from '../../../Components/CommonHeader'

import LolProfile from './Components/LolProfile'
import PubgProfile from './Components/PubgProfile'
import OverwatchProfile from './Components/OverwatchProfile'
import EtcGamesProfile from './Components/EtcGamesProfile'
import SoccerProfile from './Components/SoccerProfile'
import BasketBallProfile from './Components/BasketBallProfile'
import EtcSportsProfile from './Components/EtcSportsProfile'
import AnyProfile from './Components/AnyProfile'

class AddInterestScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: "LOL",
            categoryDetails: {}
        }
        this._setCategory = this._setCategory.bind(this)
        this._setCategoryDetails = this._setCategoryDetails.bind(this)
    }

    _setCategory(category) {
        this.setState({ 
            category
        })
    }

    _setCategoryDetails(categoryDetails) {
        this.setState({
            categoryDetails
        })
    }

    render() {
        return (
            <Container>
                <CommonHeader navigation={this.props.navigation} title="주제별 프로필 추가"/>
                <Content>
                <H3 style={{margin: 10}}>주제 선택</H3>
                    <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('SelectCategory', { _setCategory: this._setCategory })}
                    style={{backgroundColor: 'white', height: 50, justifyContent: 'center', alignItems: 'center'}}>
                        <Text>{this.state.category}</Text>
                    </TouchableOpacity>
                {(
                    () => {
                        switch(this.state.category) {
                            case 'LOL': 
                                return <LolProfile _setCategoryDetails={this._setCategoryDetails} navigation={this.props.navigation}/>
                            case 'PUBG':
                                return <PubgProfile _setCategoryDetails={this._setCategoryDetails} navigation={this.props.navigation}/>
                            case 'OVERWATCH':
                                return <OverwatchProfile _setCategoryDetails={this._setCategoryDetails} navigation={this.props.navigation}/>
                            case 'ETC_GAMES':
                                return <EtcGamesProfile _setCategoryDetails={this._setCategoryDetails} navigation={this.props.navigation}/>
                            case 'SOCCER':
                                return <SoccerProfile _setCategoryDetails={this._setCategoryDetails} navigation={this.props.navigation}/>
                            case 'BASKET_BALL':
                                return <BasketBallProfile _setCategoryDetails={this._setCategoryDetails} navigation={this.props.navigation}/>
                            case 'ETC_SPORTS':
                                return <EtcSportsProfile _setCategoryDetails={this._setCategoryDetails} navigation={this.props.navigation}/>
                            case 'ANY':
                                return <AnyProfile _setCategoryDetails={this._setCategoryDetails} navigation={this.props.navigation}/>
                            default:
                                return null
                        }
                    })()
                }
                </Content>
            </Container>
        )
    }
}



export default AddInterestScreen