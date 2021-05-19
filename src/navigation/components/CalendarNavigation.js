import React from 'react';
import {Platform} from "react-native";
import {useDispatch} from "react-redux";
import {createStackNavigator} from "@react-navigation/stack";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {navigationScreenOptions} from "../navigationOptions";
import {CalendarScreen} from "../../screens/CalendarScreen";
import {OfferScreen} from "../../screens/OfferScreen";
import {TimeEditScreen} from "../../screens/TimeEditScreen";
import {AppHeaderIcon} from "../../components/ui/AppHeaderIcon";
import {CalendarDatesRangeScreen} from "../../screens/CalendarDatesRangeScreen";
import {CalendarConfirmationScreen} from "../../screens/CalendarConfirmationScreen";
import {CalendarEditingAvailabilityScreen} from "../../screens/CalendarEditingAvailabilityScreen";
import {CalendarDateSelectionScreen} from "../../screens/CalendarDateSelectionScreen";
import {CalendarDesignationsScreen} from "../../screens/CalendarDesignationsScreen";
import {clearAllSelectedDate} from "../../store/actions/calendarActions";

const Stack = createStackNavigator();

export const CalendarNavigation = ({navigation}) => {
    const dispatch = useDispatch();
    return (
        <Stack.Navigator initialRouteName="Calendar" screenOptions={navigationScreenOptions}>
            <Stack.Screen
                name="Calendar"
                component={CalendarScreen}
                options={
                    {
                        title: 'Calendar',
                        headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item
                                    title='Calendar designations'
                                    iconName='ios-information-circle-outline'
                                    color={Platform.OS === 'ios' ? '#A1A1AA' : '#fff'}
                                    onPress={() => navigation.navigate("CalendarDesignations")}
                                />
                            </HeaderButtons>
                        ),
                    }
                }
            />
            <Stack.Screen
                name="CalendarDesignations"
                component={CalendarDesignationsScreen}
                options={{
                    title: 'Calendar designations',
                }}
            />
            <Stack.Screen
                name="CalendarDateSelection"
                component={CalendarDateSelectionScreen}
                options={{
                    title: 'Editing',
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title='Clear All'
                                onPress={() => dispatch(clearAllSelectedDate())}
                            />
                        </HeaderButtons>
                    ),
                }}
            />
            <Stack.Screen
                name="CalendarDatesRange"
                component={CalendarDatesRangeScreen}
                options={{
                    title: 'Editing',
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title='Clear All'
                                onPress={() => dispatch(clearAllSelectedDate())}
                            />
                        </HeaderButtons>
                    ),
                }}
            />
            <Stack.Screen
                name="CalendarConfirmation"
                component={CalendarConfirmationScreen}
                options={{
                    title: 'Confirmation',
                }}
            />
            <Stack.Screen
                name="CalendarEditingAvailability"
                component={CalendarEditingAvailabilityScreen}
                options={{
                    title: 'Valitse päivät',
                }}
            />
            <Stack.Screen
                name="JobOffer"
                component={OfferScreen}
                options={{
                    title: "Job offer"
                }}
            />
            <Stack.Screen
                name="TimeEditScreen"
                component={TimeEditScreen}
                options={{
                    title: "Edit Time"
                }}
            />
        </Stack.Navigator>
    )
}
