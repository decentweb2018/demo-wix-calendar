import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from "../screens/LoginScreen";
import {PassResetScreen} from "../screens/PassResetScreen";
import {ResetSuccessfullyScreen} from "../screens/ResetSuccessfullyScreen";

const Stack = createStackNavigator();

export const LoginNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Sign In">
            <Stack.Screen name="Sign In"
                          component={LoginScreen}
                          options={{headerShown: false}}/>
            <Stack.Screen name="Password Reset"
                          component={PassResetScreen}
                          options={{title: "Salasanan nollaus"}}/>
            <Stack.Screen name="Reseted Successfully"
                          component={ResetSuccessfullyScreen}
                          options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}
