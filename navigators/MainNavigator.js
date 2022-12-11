import { CardStyleInterpolators,createStackNavigator } from '@react-navigation/stack';
import {HomeScreen,AddExpenseScreen} from '../screens';


const Stack = createStackNavigator();
export const MainNavigator = () => {
    return(
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
            name = "Home" 
            component = {HomeScreen}
            options={{ headerShown: false,
                // cardStyleInterpolator:CardStyleInterpolators.forVerticalIOS,
             }}    
        />
        <Stack.Screen 
            name="AddExpenses" 
            component ={AddExpenseScreen}
            options={{ headerShown: false,
                // cardStyleInterpolator:CardStyleInterpolators.forVerticalIOS,
             }}
        />
    </Stack.Navigator>
    );
};
