import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {THEME} from "../../theme";
import SvgUri from "expo-svg-uri";
import onBoardingStyles from "./OnBoardingStyles";
import {AppText} from "../../components/ui/AppText";
import {AppButton} from "../../components/ui/AppButton";

export const OnBoardingScreen3 = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={{alignItems: 'center'}}>
                    <View style={styles.imgBox}>
                        <SvgUri style={styles.image} source={require("../../images/placeholder.svg")}/>
                    </View>
                    <AppText style={styles.title}>Onboarding title three</AppText>
                    <AppText style={styles.desc}>
                        A adipiscing vestibulum et proin elementum. Nascetur egestas dictum molestie ultrices
                        consectetur
                        egestas ante ut lorem. Ut.
                    </AppText>
                </View>
                <AppButton onPress={() => navigation.navigate('GeneralNavigation')}
                           bgColor={THEME.MAIN_COLOR}>Let’s go!
                </AppButton>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create(onBoardingStyles)

