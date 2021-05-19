import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {MainTabNavigation} from "./components/MainTabNavigation";

const Stack = createStackNavigator();

export const GeneralNavigation = ({}) => {
    return (
        <Stack.Navigator initialRouteName="Tabs">
            <Stack.Screen name="Tabs"
                          component={MainTabNavigation}
                          options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}
