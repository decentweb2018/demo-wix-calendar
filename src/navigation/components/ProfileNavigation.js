import * as React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {navigationScreenOptions} from "../navigationOptions";
import {ProfileScreen} from "../../screens/ProfileScreen";
import {PersonalInfoEdtScreen} from "../../screens/PersonalInfoEdtScreen";
import {SkillsAndAttachments} from "../../screens/SkillsAndAttachments";
import {PastLeavesScreen} from "../../screens/PastLeavesScreen";
import {SkillsScreen} from "../../screens/SkillsScreen";
import {MyStatisticsScreen} from "../../screens/MyStatisticsScreen";
import {OffersScreen} from "../../screens/OffersScreen";
import {CertificatesScreen} from "../../screens/CertificatesScreen";
import {OfferScreen} from "../../screens/OfferScreen";
import {JobLogScreen} from "../../screens/JobLogScreen";
import {TimeEditScreen} from "../../screens/TimeEditScreen";

const Stack = createStackNavigator();

export const ProfileNavigation = ({}) => {
    return (
        <Stack.Navigator initialRouteName="Profile" screenOptions={navigationScreenOptions}>
            <Stack.Screen
                name="My Profile"
                component={ProfileScreen}
            />
            <Stack.Screen
                name="EditProfileInfo"
                component={PersonalInfoEdtScreen}
                options={{
                    title: "Account info"
                }}
            />
            <Stack.Screen
                name="SkillsAndAttachments"
                component={SkillsAndAttachments}
                options={{
                    title: "Skills and Attachments"
                }}
            />
            <Stack.Screen
                name="MyStatistics"
                component={MyStatisticsScreen}
                options={{
                    title: "Last three months"
                }}
            />
            <Stack.Screen
                name="PastLeaves"
                component={PastLeavesScreen}
                options={{
                    title: "Past leaves"
                }}
            />
            <Stack.Screen
                name="Skills"
                component={SkillsScreen}
            />
            <Stack.Screen
                name="Certificates"
                component={CertificatesScreen}
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
