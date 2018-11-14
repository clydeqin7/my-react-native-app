import React from 'react'
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import SignInScreen from './src/screen/SignIn'
import HomeScreen from './src/screen/Home'
import SettingsScreen from './src/screen/Settings'
import DetailsScreen from './src/screen/Details'
import AuthLoadingScreen from './src/screen/AuthLoading'
import OtherScreen from './src/screen/OtherScreen'
import Icon from 'react-native-vector-icons/AntDesign';

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        headerMode: 'none',
        // navigationOptions: ({ navigation }) => ({
        //     title: '主页',
        // }),
    });

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
    Details: DetailsScreen,
}, { headerMode: 'none', });

const OtherStack = createStackNavigator({
    Other: OtherScreen,
    Details: DetailsScreen,
}, { headerMode: 'none', });

const AppStack = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
        },
        '消息': SettingsStack,
        '我的': OtherStack
    },
    {
        // navigationOptions: ({ navigation }) => ({
        //     tabBarIcon: ({ focused, horizontal, tintColor }) => {
        //         const { routeName } = navigation.state;
        //         let iconName;
        //         if (routeName === 'Home') {
        //             iconName = 'home';
        //         } else if (routeName === '消息') {
        //             iconName = 'message';
        //         } else if (routeName === '我的') {
        //             iconName = 'setting'
        //         }
        //
        //         // You can return any component that you like here! We usually use an
        //         // icon component from react-native-vector-icons
        //         return <Icon name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
        //     },
        // }),
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
