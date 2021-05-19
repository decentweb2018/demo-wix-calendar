import React, {useState} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {GeneralNavigation} from "./GeneralNavigation";
import {FirstIterationNavigation} from "./components/FirstIterationNavigation";
import {OnBoardingNavigation} from "./components/OnBoardingNavigation";

const Stack = createStackNavigator();

export const AppNavigation = () => {
    const [firstIteration, setFirstIteration] = useState(false);

    return (
        <Stack.Navigator initialRouteName={firstIteration ? 'FirstIterationNavigation' : 'GeneralNavigation'}>
            <Stack.Screen
                name="FirstIterationNavigation"
                component={FirstIterationNavigation}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="OnboardingNavigation"
                component={OnBoardingNavigation}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="GeneralNavigation"
                component={GeneralNavigation}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}