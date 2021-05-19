import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {navigationScreenOptions} from "../navigationOptions";
import {PersonalInfoScreen} from "../../screens/PersonalInfoScreen";
import {AgreementScreen} from "../../screens/AgreementScreen";
import {SkillsScreen} from "../../screens/SkillsScreen";

const Stack = createStackNavigator();

export const FirstIterationNavigation = ({}) => {
    return (
        <Stack.Navigator initialRouteName="Profile" screenOptions={navigationScreenOptions}>
            <Stack.Screen
                name="Profile"
                component={PersonalInfoScreen}
            />
            <Stack.Screen
                name="Agreement"
                component={AgreementScreen}
            />
            <Stack.Screen
                name="Skills"
                component={SkillsScreen}
            />
        </Stack.Navigator>
    )
}
