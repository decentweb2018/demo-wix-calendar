import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import SvgUri from "expo-svg-uri";
import {THEME} from "../../theme";
import onBoardingStyles from "./OnBoardingStyles";
import {AppText} from "../../components/ui/AppText";
import {AppButton} from "../../components/ui/AppButton";

export const OnBoardingScreen1 = ({navigation}) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={{alignItems: 'center'}}>
                    <View style={styles.imgBox}>
                        <SvgUri style={styles.image} source={require("../../images/placeholder.svg")}/>
                    </View>
                    <AppText style={styles.title}>Onboarding title one</AppText>
                    <AppText style={styles.desc}>
                        A adipiscing vestibulum et proin elementum. Nascetur egestas dictum molestie ultrices
                        consectetur
                        egestas ante ut lorem. Ut.
                    </AppText>
                </View>
                <AppButton onPress={() => navigation.navigate('Onboarding 2')}
                           bgColor={THEME.MAIN_COLOR}>Ohita</AppButton>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create(onBoardingStyles)

