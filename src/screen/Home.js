import React from "react";
import {Text, View} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Icon name="home" size={30} color="#900" />
            </View>
        );
    }
}
