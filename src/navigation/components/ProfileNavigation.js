import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {navigationScreenOptions} from "../navigationOptions";
import {ProfileScreen} from "../../screens/ProfileScreen";

const Stack = createStackNavigator();

export const ProfileNavigation = ({}) => {
    return (
        <Stack.Navigator initialRouteName="Profile" screenOptions={navigationScreenOptions}>
            <Stack.Screen
                name="My Profile"
                component={ProfileScreen}
            />
        </Stack.Navigator>
    )
}
