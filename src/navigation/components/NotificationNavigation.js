import * as React from 'react';
import {Platform} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {createStackNavigator} from "@react-navigation/stack";
import {navigationScreenOptions} from "../navigationOptions";
import {AppHeaderIcon} from "../../components/ui/AppHeaderIcon";
import {NotificationsScreen} from "../../screens/NotificationsScreen";
import {ArchiveNotificationsScreen} from "../../screens/ArchiveNotificationsScreen";
import {ChatScreen} from "../../screens/ChatScreen";
import {MessagesScreen} from "../../screens/MessagesScreen";
import {OfferScreen} from "../../screens/OfferScreen";
import {JobLogScreen} from "../../screens/JobLogScreen";
import {TimeEditScreen} from "../../screens/TimeEditScreen";
import {OffersScreen} from "../../screens/OffersScreen";

const Stack = createStackNavigator();

export const NotificationNavigation = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="Notifications" screenOptions={navigationScreenOptions}>
            <Stack.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={
                    {
                        title: 'All Notifications',
                        headerRight: () => (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                                <Item
                                    title='Calendar designations'
                                    iconName='archive'
                                    color={Platform.OS === 'ios' ? '#16A34A' : '#fff'}
                                    onPress={() => navigation.navigate("ArchiveNotifications")}
                                />
                            </HeaderButtons>
                        ),
                    }
                }
            />
            <Stack.Screen
                name="ArchiveNotifications"
                component={ArchiveNotificationsScreen}
                options={{
                    title: "Archive"
                }}
            />
            <Stack.Screen
                name="Messages"
                component={MessagesScreen}
            />

            <Stack.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    title: "Joblink Support",
                }}
            />
            <Stack.Screen
                name="Offers"
                component={OffersScreen}
            />
            <Stack.Screen
                name="JobOffer"
                component={OfferScreen}
                options={{
                    title: "Job offer"
                }}
            />
            <Stack.Screen
                name="Job log"
                component={JobLogScreen}
                options={{
                    title: "Job log"
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
