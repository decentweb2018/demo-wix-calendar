import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {navigationScreenOptions} from "../navigationOptions";
import {NotificationsScreen} from "../../screens/NotificationsScreen";

const Stack = createStackNavigator();

export const NotificationNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Notifications" screenOptions={navigationScreenOptions}>
            <Stack.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={
                    {
                        title: 'All Notifications',
                    }
                }
            />
        </Stack.Navigator>
    )
}
