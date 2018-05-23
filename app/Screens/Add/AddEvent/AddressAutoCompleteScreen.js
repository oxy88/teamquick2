import React from 'react';
import { View, Image, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { Icon, Text, Container, Content, Header, Input, Item } from 'native-base'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const platform = Platform.OS
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const isIphoneX =
  platform === "ios" && deviceHeight === 812 && deviceWidth === 375
const toolbarHeight = platform === "ios" ? (isIphoneX ? 88 : 64) : 56
const statusBarHeight = platform === "ios" ? (isIphoneX ? 44 : 20 ) : 0

import CommonHeader from '../../../Components/CommonHeader'

class  GooglePlacesInput extends React.Component {
    render() {
        return (
            <Container>
            <GooglePlacesAutocomplete
          placeholder='주소 장소 검색'
          minLength={2}
          autoFocus={true}
          returnKeyType={'default'}
          fetchDetails={true}
          onPress={(data, details = null) => {
              console.log(data, details)
              this.props.navigation.state.params._changeAddress(data, details)
              this.props.navigation.goBack()
          }}
          styles={{
            textInputContainer: {
              width: "100%",
              height: toolbarHeight,
              paddingTop: statusBarHeight,
              backgroundColor: 'white'
            },
            textInput: {
              marginLeft: 0,
              marginRight: 0,
              height: platform === "ios" ? 30 : 50,
              color: '#5d5d5d',
              fontSize: 16
            },
            predefinedPlacesDescription: {
              color: '#1faadb'
            },
          }}
          currentLocation={false}
          query={{
              key: "AIzaSyAR41UZ8CXZ34EQqZx39IgxEXKYeiDmwjE",
              language: 'ko',
          }}
          renderLeftButton={() => <Icon style={{margin: 10}} onPress={() => this.props.navigation.goBack()} name="arrow-back" />}
        />
            </Container>
          );
    }
}

export default GooglePlacesInput