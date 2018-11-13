import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    // 配置标题栏
    static navigationOptions = {
        title: 'home',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title='go to details'
                    onPress={() =>
                    {this.props.navigation.navigate('Details',
                        // 传参
                        {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        })
                    }}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    // 在标题中使用参数
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        };
    };
    render() {
        // 接收参数, 提供一个回调值作为默认值
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'default-itemId')
        const otherParam = navigation.getParam('otherParam', 'defalut-otherParam')

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>raw data</Text>
                <Text>itemId: {itemId}</Text>
                <Text>otherParam: {otherParam}</Text>
                <Text>JSON.stringify()</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title='go to details again!'
                    onPress={() => {this.props.navigation.navigate('Details')}}
                />
                <Button
                    title='go back'
                    onPress={() => {this.props.navigation.goBack()}}
                />
            </View>
        );
    }
}
const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

export default  class App extends React.Component {
    render() {
        return <RootStack/>;
    }
}
