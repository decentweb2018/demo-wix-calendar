import React from 'react';
import {Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';
import SvgUri from "expo-svg-uri";
import {BadgeStyles, THEME} from "../theme";
import {AppText} from "../components/ui/AppText";

export const SkillsAndAttachments = ({navigation}) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

    const addSkillHandler = () => {
        console.log("addSkillHandler()")
    }

    const deleteSkillHandler = () => {
        console.log("deleteSkillHandler()")
    }

    const addCertificateHandler = () => {
        console.log("addCertificateHandler()")
    }

    const deleteCertificateHandler = () => {
        console.log("deleteCertificateHandler()")
    }

    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <AppText style={styles.label}>Skills</AppText>
                <View style={styles.badges}>
                    <View style={styles.badge}>
                        <AppText style={styles.badgeTitle}>Skill</AppText>
                        <Wrapper onPress={() => deleteSkillHandler()}>
                            <View style={styles.badgeIcon}>
                                <SvgUri style={styles.logo} source={require("../images/close.svg")}/>
                            </View>
                        </Wrapper>
                    </View>
                    <View style={styles.badge}>
                        <AppText style={styles.badgeTitle}>One more skill</AppText>
                        <Wrapper onPress={() => deleteSkillHandler()}>
                            <View style={styles.badgeIcon}>
                                <SvgUri style={styles.logo} source={require("../images/close.svg")}/>
                            </View>
                        </Wrapper>
                    </View>
                    <View style={styles.badge}>
                        <AppText style={styles.badgeTitle}>Even more skill</AppText>
                        <Wrapper onPress={() => deleteSkillHandler()}>
                            <View style={styles.badgeIcon}>
                                <SvgUri style={styles.logo} source={require("../images/close.svg")}/>
                            </View>
                        </Wrapper>
                    </View>
                    <Wrapper onPress={() => navigation.navigate("Skills")}>
                        <View style={{...styles.badge, ...styles.badgeAdd}}>
                            <View style={styles.badgeIcon}>
                                <SvgUri style={styles.logo} source={require("../images/add.svg")}/>
                            </View>
                            <AppText style={{...styles.badgeTitle, ...styles.badgeAddTitle}}>Add</AppText>
                        </View>
                    </Wrapper>
                </View>
                <AppText style={styles.subText}>Row caption if needed</AppText>
            </View>
            <View style={styles.section}>
                <AppText style={styles.label}>Certificates</AppText>
                <View style={styles.badges}>
                    <View style={styles.badge}>
                        <AppText style={styles.badgeTitle}>CerteficateOne</AppText>
                        <Wrapper onPress={deleteCertificateHandler}>
                            <View style={styles.badgeIcon}>
                                <SvgUri style={styles.logo} source={require("../images/close.svg")}/>
                            </View>
                        </Wrapper>
                    </View>
                    <Wrapper onPress={() => navigation.navigate("Certificates")}>
                        <View style={{...styles.badge, ...styles.badgeAdd}}>
                            <View style={styles.badgeIcon}>
                                <SvgUri style={styles.logo} source={require("../images/add.svg")}/>
                            </View>
                            <AppText style={{...styles.badgeTitle, ...styles.badgeAddTitle}}>Add</AppText>
                        </View>
                    </Wrapper>
                </View>
                <AppText style={styles.subText}>Row caption if needed</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        height: '100%',
        backgroundColor: '#fff',
    },
    section: {
        marginBottom: 20
    },
    label: {
        marginVertical: 5,
        fontSize: 15,
    },
    subText: {
        marginTop: -4,
        fontSize: 12,
        color: THEME.PLACEHOLDER_COLOR
    },
    ...BadgeStyles,
})
