import React from 'react'
import PropTypes from 'prop-types'
import { H3, Form, Picker, Header, Left, Button, Icon, Body, Title, Right } from 'native-base'

const Item = Picker.Item

class MyPicker extends React.Component {
    render() {
        return (
            <React.Fragment>
            <H3 style={{margin: 10}}>{this.props.propName}</H3>
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
                            <Title>{`${this.props.propName} 선택`}</Title>
                        </Body>
                        <Right />
                    </Header>
                }
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: "100%", backgroundColor: 'white' }}
                itemStyle={{ justifyContent: 'space-between' }}
                selectedValue={this.props.currentProp} 
                onValueChange={(value) => this.props.onValueChange(value)}
                >
                {this.props.options.map(option => {
                    return (
                        <Item key={option} label={option} value={option} />
                    )
                })}
                </Picker>
            </Form>
            </React.Fragment>
        )
    }
}

MyPicker.propTypes = {
    propName: PropTypes.string,
    currentProp: PropTypes.string,
    options: PropTypes.array,
    onValueChange: PropTypes.any
}

export default MyPicker