import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {navigationScreenOptions} from "../navigationOptions";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {OnBoardingScreen1} from "../../screens/OnBoardingScreens/OnBoardingScreen1";
import {OnBoardingScreen2} from "../../screens/OnBoardingScreens/OnBoardingScreen2";
import {OnBoardingScreen3} from "../../screens/OnBoardingScreens/OnBoardingScreen3";
import {AppHeaderIcon} from "../../components/ui/AppHeaderIcon";

const Stack = createStackNavigator();

export const OnBoardingNavigation = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="Onboarding 1" screenOptions={navigationScreenOptions}>
            <Stack.Screen
                name="Onboarding 1"
                component={OnBoardingScreen1}
                options={
                    {
                        headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item
                                    title='Skip'
                                    iconName='ios-arrow-redo-outline'
                                    onPress={() => navigation.navigate('GeneralNavigation')}
                                />
                            </HeaderButtons>
                        ),
                    }
                }
            />
            <Stack.Screen
                name="Onboarding 2"
                component={OnBoardingScreen2}
            />
            <Stack.Screen
                name="Onboarding 3"
                component={OnBoardingScreen3}
            />
        </Stack.Navigator>
    )
}
