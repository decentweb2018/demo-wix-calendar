import React from 'react';
import {StyleSheet, ScrollView, View, Platform, TouchableNativeFeedback, TouchableOpacity} from 'react-native';
import {AppText} from "../components/ui/AppText";
import SvgUri from "expo-svg-uri";
import {BoxesStyles, THEME} from "../theme";

export const ArchiveNotificationsScreen = ({navigation}) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

    return (
        <ScrollView style={{backgroundColor: '#fff'}}>
            <View style={styles.container}>
                <Wrapper onPress={() => navigation.navigate("JobOffer")}>
                    <View style={styles.box}>
                        <View style={styles.boxTitleWrap}>
                            <AppText style={styles.boxTitle}>Work is Completed</AppText>
                        </View>
                        <AppText style={styles.boxSubTitle}>Job role</AppText>
                        <AppText style={styles.boxDesc}>Job Location</AppText>
                        <AppText style={styles.boxDesc}>Yesterday, 12:49</AppText>
                        <View style={styles.arrow}>
                            <SvgUri style={styles.arrowImg} source={require("../images/arrow-right.svg")}/>
                        </View>
                    </View>
                </Wrapper>
                <Wrapper onPress={() => navigation.navigate("JobOffer")}>
                    <View style={styles.box}>
                        <View style={styles.boxTitleWrap}>
                            <AppText style={styles.boxTitle}>Work is Completed</AppText>
                        </View>
                        <AppText style={styles.boxSubTitle}>Job role</AppText>
                        <AppText style={styles.boxDesc}>Job Location</AppText>
                        <AppText style={styles.boxDesc}>Yesterday, 12:49</AppText>
                        <View style={styles.arrow}>
                            <SvgUri style={styles.arrowImg} source={require("../images/arrow-right.svg")}/>
                        </View>
                    </View>
                </Wrapper>
                <Wrapper onPress={() => navigation.navigate("JobOffer")}>
                    <View style={styles.box}>
                        <View style={styles.boxTitleWrap}>
                            <AppText style={styles.boxTitle}>Work is Completed</AppText>
                        </View>
                        <AppText style={styles.boxSubTitle}>Job role</AppText>
                        <AppText style={styles.boxDesc}>Job Location</AppText>
                        <AppText style={styles.boxDesc}>Yesterday, 12:49</AppText>
                        <View style={styles.arrow}>
                            <SvgUri style={styles.arrowImg} source={require("../images/arrow-right.svg")}/>
                        </View>
                    </View>
                </Wrapper>
                <Wrapper onPress={() => navigation.navigate("JobOffer")}>
                    <View style={styles.box}>
                        <View style={styles.boxTitleWrap}>
                            <AppText style={styles.boxTitle}>Work is Completed</AppText>
                        </View>
                        <AppText style={styles.boxSubTitle}>Job role</AppText>
                        <AppText style={styles.boxDesc}>Job Location</AppText>
                        <AppText style={styles.boxDesc}>Yesterday, 12:49</AppText>
                        <View style={styles.arrow}>
                            <SvgUri style={styles.arrowImg} source={require("../images/arrow-right.svg")}/>
                        </View>
                    </View>
                </Wrapper>
                <Wrapper onPress={() => navigation.navigate("JobOffer")}>
                    <View style={styles.box}>
                        <View style={styles.boxTitleWrap}>
                            <AppText style={styles.boxTitle}>Work is Completed</AppText>
                        </View>
                        <AppText style={styles.boxSubTitle}>Job role</AppText>
                        <AppText style={styles.boxDesc}>Job Location</AppText>
                        <AppText style={styles.boxDesc}>Yesterday, 12:49</AppText>
                        <View style={styles.arrow}>
                            <SvgUri style={styles.arrowImg} source={require("../images/arrow-right.svg")}/>
                        </View>
                    </View>
                </Wrapper>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        padding: 15
    },
    ...BoxesStyles,
})
