import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import xxTab from './MyTabNavigator'

export default class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>login</Text>
                <Button
                    title='go to navTab'
                    onPress={() => {
                        this.props.navigation.navigate('xxTab')
                    }}>
                </Button>
                <xxTab></xxTab>
            </View>
        );
    }
}
