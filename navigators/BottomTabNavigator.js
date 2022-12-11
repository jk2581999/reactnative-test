import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { WalletScreen } from '../screens';
import {MainNavigator} from './MainNavigator';
import {HomeIconFilled,HomeIconWithoutFilled,WalletFilledIcon,WalletWithoutFilledIcon} from '../Icons';

const Tabs = createBottomTabNavigator();

export const BottomTabs = () => {
    return(
        <Tabs.Navigator initialRouteName='HomeStack'>
            <Tabs.Screen name='HomeStack' component={MainNavigator} options={{
                headerShown:false,
                tabBarLabel: "",
                tabBarOptions: {
                    activeTintColor: "#006600",
                  },
                  tabBarIcon: (tabInfo) => {
                    return (
                        tabInfo.focused ? <HomeIconFilled /> : <HomeIconWithoutFilled/>
                    );
                  },
                }}/>
            <Tabs.Screen name='Wallet' component={WalletScreen} options={{
                headerShown:false,
                tabBarLabel: "",
                tabBarOptions: {
                    activeTintColor: "#006600",
                    },
                    tabBarIcon: (tabInfo) => {
                    return (
                        tabInfo.focused ? <WalletFilledIcon /> : <WalletWithoutFilledIcon/>
                    );
                    },
            }}/>
        </Tabs.Navigator>
    );
}
