import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import SignInScreen from './src/screen/SignIn'
import HomeScreen from './src/screen/Home'
import SettingsScreen from './src/screen/Settings'
import DetailsScreen from './src/screen/Details'
import AuthLoadingScreen from './src/screen/AuthLoading'
import OtherScreen from './src/screen/OtherScreen'

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
}, { headerMode: 'none', });

const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
    Details: DetailsScreen,
}, { headerMode: 'none', });

const OtherStack = createStackNavigator({
    Other: OtherScreen,
    Details: DetailsScreen,
}, { headerMode: 'none', });

const AppStack = createBottomTabNavigator({ Home: HomeStack, Settings: SettingsStack, Other: OtherStack });
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
