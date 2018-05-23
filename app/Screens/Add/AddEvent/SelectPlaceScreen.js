import React from 'react'
import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { Container, Content, H1, H2, Text, Header, Icon, Input, Item, Button } from 'native-base'
import MapView, { Marker } from 'react-native-maps'
import Geocoder from 'react-native-geocoder'

import CommonHeader from '../../../Components/CommonHeader'

class SelectPlaceScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            region: {
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.0083,
                longitudeDelta: 0.0068
            },
            address: ""
        }
        this._changeAddress = this._changeAddress.bind(this)
        this.onRegionChange = this.onRegionChange.bind(this)
        this._handleMapClick = this._handleMapClick.bind(this)
    }

    async componentDidMount() {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const result = await Geocoder.geocodePosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            })

            this.setState({
                region: {
                    ...this.state.region,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                },
                address: `${result[0].adminArea} ${result[0].locality} ${result[0].streetName} ${result[0].streetNumber}`
            })
        })
    }

    _changeAddress(data, details) {
        let data2 = data.description.replace(/대한민국 /, '')
        let data3 = data2.replace(/null/, '')

        this.setState({ 
            address: data3,
            region: {
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                latitudeDelta: details.geometry.viewport.northeast.lat - details.geometry.viewport.southwest.lat,
                longitudeDelta: details.geometry.viewport.northeast.lng - details.geometry.viewport.southwest.lng,
            }
        })
    }

    async _handleMapClick(nativeEvent) {
        const result = await Geocoder.geocodePosition({
            lat: nativeEvent.coordinate.latitude,
            lng: nativeEvent.coordinate.longitude,
        })

        this.setState({
            region: {
                ...this.state.region,
                latitude: nativeEvent.coordinate.latitude,
                longitude: nativeEvent.coordinate.longitude
            },
            address: result[0].formattedAddress.replace(/대한민국 /, '').replace(/\d{5}/, '')
        })
    }

    onRegionChange(region) {
        this.setState({
            region
        })
    }

    _confirm() {
        const place = {
            description: this.state.address,
            lat: this.state.region.latitude,
            lng: this.state.region.longitude,
        }
        this.props.navigation.state.params._selectPlace(place)
        this.props.navigation.goBack()
    }

    render() {
        return (
                <Container>
                <Header searchBar style={{backgroundColor: 'white'}}>
                <Item style={{backgroundColor: 'white'}}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Icon name="arrow-back" />
                </TouchableOpacity>
                <TouchableOpacity 
                    onPress={() => this.props.navigation.navigate('AddressAutoComplete', { 
                        _changeAddress: this._changeAddress
                    })}
                    style={{flex: 1, justifyContent: 'center', alignItems: 'flex-start', height: "100%"}}
                >
                    <Text>{this.state.address ? this.state.address : "장소, 주소 검색"}</Text>
                </TouchableOpacity>
                </Item>
                </Header>
                <MapView
                    style={styles.map}
                    region={this.state.region}
                    onPress={(e) => {
                        this._handleMapClick(e.nativeEvent)
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: this.state.region.latitude,
                            longitude: this.state.region.longitude,
                            title: this.state.address

                        }}
                    />
                </MapView>
                <Button block style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0
                }}
                    onPress={() => this._confirm()}
                >
                    <Text>확인</Text>
                </Button>
                </Container>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 64,
        left: 0,
        bottom: 0,
        right: 0
    }
})
export default SelectPlaceScreen

