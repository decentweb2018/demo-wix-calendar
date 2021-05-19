import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {GeneralNavigation} from "./GeneralNavigation";

const Stack = createStackNavigator();

export const AppNavigation = () => {

    return (
        <Stack.Navigator initialRouteName="GeneralNavigation">
            <Stack.Screen
                name="GeneralNavigation"
                component={GeneralNavigation}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}