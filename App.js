import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Login from './views/Login'

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Login/>
            </View>
        );
    }
}
