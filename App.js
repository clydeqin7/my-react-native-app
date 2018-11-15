import React from 'react'
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import SignInScreen from './src/screen/SignIn'
import HomeScreen from './src/screen/Home'
import SettingsScreen from './src/screen/Settings'
import DetailsScreen from './src/screen/Details'
import AuthLoadingScreen from './src/screen/AuthLoading'
import MessageScreen from './src/screen/Message'
import Icon from 'react-native-vector-icons/AntDesign';

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {headerMode: 'none',});

const MessageStack = createStackNavigator({
    Message: MessageScreen,
    Details: DetailsScreen,
}, { headerMode: 'none', });

const SettingStack = createStackNavigator({
    Settings: SettingsScreen,
    Details: DetailsScreen,
}, { headerMode: 'none', });

const AppStack = createBottomTabNavigator(
    {
        '主页': {
            screen: HomeStack,
        },
        '消息': MessageStack,
        '设置': SettingStack
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === '主页') {
                    iconName = 'home';
                } else if (routeName === '消息') {
                    iconName = 'notification';
                } else if (routeName === '设置') {
                    iconName = 'setting'
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#3b5998',
            inactiveTintColor: '#cccccc'
        },
    }
);
const AuthStack = createStackNavigator({ SignIn: SignInScreen }, { headerMode: 'none', });

export default createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);
