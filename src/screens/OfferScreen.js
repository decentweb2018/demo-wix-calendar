import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {JobStyles, THEME} from "../theme";
import {AppTextBold} from "../components/ui/AppTextBold";
import {AppText} from "../components/ui/AppText";
import {AppButton} from "../components/ui/AppButton";

export const OfferScreen = ({route, navigation}) => {
    const date = route.params ? route.params.date.dateString : null;
    return (
        <ScrollView style={styles.container}>
            <View style={{paddingVertical: 16}}>
                <View style={{marginBottom: 25}}>
                    <AppTextBold style={styles.title}>Job role</AppTextBold>
                    <View style={styles.row}>
                        <AppText style={styles.dt}>Task:</AppText><AppText style={styles.dd}>Task name 1</AppText>
                    </View>
                </View>
                <View style={styles.section}>
                    <AppText style={styles.subTitle}>Address</AppText>
                    <View style={styles.box}>
                        <AppTextBold style={styles.boxTitle}>Job Location</AppTextBold>
                        <AppText style={styles.boxDesc}>Mannerheimvägen 9, Helsinki</AppText>
                    </View>
                </View>
                <View style={styles.section}>
                    <AppText style={styles.subTitle}>Time</AppText>
                    <View style={styles.box}>
                        <View style={{...styles.row, marginBottom: 6}}>
                            <AppText style={styles.dt}>Date:</AppText>
                            <AppTextBold style={{...styles.dd, fontSize: 17}}>
                                {date ? date : "12. Helmikuu, 2020"}
                            </AppTextBold>
                        </View>
                        <View style={{...styles.row, marginBottom: 6}}>
                            <View style={{...styles.row, width: 140}}>
                                <AppText style={styles.dt}>Start:</AppText>
                                <AppTextBold style={{...styles.dd, fontSize: 17}}>10:00</AppTextBold>
                            </View>
                            <View style={{...styles.row, ...styles.subRow}}>
                                <AppText style={styles.dt}>Start:</AppText>
                                <AppTextBold style={{...styles.dd, fontSize: 17}}>15:00</AppTextBold>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <AppText style={styles.dt}>Length:</AppText>
                            <AppTextBold style={{...styles.dd, fontSize: 17}}>5 hrs</AppTextBold>
                        </View>
                    </View>
                </View>
                <View style={styles.section}>
                    <AppText style={styles.subTitle}>Description</AppText>
                    <View style={styles.box}>
                        <AppText style={{...styles.boxDesc, marginBottom: 6}}>
                            Tellus morbi facilisi nibh dui. Nulla cursus laoreet non non mauris diam ullamcorper
                            placerat eu. Auctor facilisis purus congue neque, nec vulputate etiam venenatis. Iaculis
                            convallis viverra quam tristique.
                        </AppText>
                        <AppText style={styles.boxDesc}>
                            Nibh viverra facilisi in pellentesque ipsum. Ac nunc semper sit morbi. Laoreet et vestibulum
                            nisi sagittis.
                        </AppText>
                    </View>
                </View>
                <View style={styles.section}>
                    <AppText style={styles.subTitle}>Requied skills</AppText>
                    <View style={{...styles.row, marginTop: 4}}>
                        <View style={styles.badge}><AppText style={styles.badgeText}>Basic math</AppText></View>
                        <View style={styles.badge}><AppText style={styles.badgeText}>skillTwo</AppText></View>
                        <View style={styles.badge}><AppText style={styles.badgeText}>skillThree</AppText></View>
                        <View style={styles.badge}><AppText style={styles.badgeText}>skillFour</AppText></View>
                        <View style={styles.badge}><AppText style={styles.badgeText}>skillFive</AppText></View>
                    </View>
                </View>
                <View style={{marginBottom: 8}}>
                    <AppButton bgColor={THEME.MAIN_COLOR}>Accept</AppButton>
                </View>
                <View style={{marginBottom: 5}}>
                    <AppButton onPress={() => navigation.goBack()}
                               color={THEME.DANGER_COLOR}
                               bgColor={THEME.DANGER_BG_COLOR}>Decline</AppButton>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create(JobStyles)
