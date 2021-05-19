import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Image, StyleSheet, View, ScrollView, Platform, TouchableNativeFeedback, TouchableOpacity} from 'react-native';
import {THEME} from "../theme";
import {AppTextBold} from "../components/ui/AppTextBold";
import {AppText} from "../components/ui/AppText";
import {AppButton} from "../components/ui/AppButton";
import {signOut} from "../store/actions/authActions";

export const ProfileScreen = ({navigation}) => {
    const LinkWrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    const dispatch = useDispatch();
    const profile = useSelector(state => state.auth.profile);
    const loading = useSelector(state => state.auth.loading);
    const profilePhoto = profile ? profile.photoUrl : null;

    const signOutHandler = () => {
        dispatch(signOut());
    }

    return (
        <ScrollView style={styles.container}>
            {!loading ? (<View>
                <View style={styles.head}>
                    <View style={styles.imgBox}>
                        <Image style={styles.image} source={profile ? {uri: profilePhoto} : null}/>
                    </View>
                    <AppTextBold style={styles.name}>
                        {profile ? `${profile.firstName} ${profile.lastName}` : 'Error 401'}
                    </AppTextBold>
                </View>
                <View style={styles.nav}>
                    <LinkWrapper onPress={() => navigation.navigate("EditProfileInfo")} activeOpacity={0.7}>
                        <View style={styles.link}>
                            <AppText>Edit account info</AppText>
                        </View>
                    </LinkWrapper>
                    <LinkWrapper onPress={() => navigation.navigate("SkillsAndAttachments")} activeOpacity={0.7}>
                        <View style={styles.link}>
                            <AppText>Skills and Attachments</AppText>
                        </View>
                    </LinkWrapper>
                    <LinkWrapper onPress={() => navigation.navigate("MyStatistics")} activeOpacity={0.7}>
                        <View style={styles.link}>
                            <AppText>Statistics</AppText>
                        </View>
                    </LinkWrapper>
                    <LinkWrapper onPress={() => navigation.navigate("Offers")} activeOpacity={0.7}>
                        <View style={styles.link}>
                            <AppText>Job logs</AppText>
                        </View>
                    </LinkWrapper>
                    <LinkWrapper onPress={() => navigation.navigate("PastLeaves")} activeOpacity={0.7}>
                        <View style={styles.link}>
                            <AppText>Past Leaves</AppText>
                        </View>
                    </LinkWrapper>
                    <LinkWrapper onPress={() => console.log("navigation.navigate()")} activeOpacity={0.7}>
                        <View style={styles.link}>
                            <AppText>Tech support</AppText>
                        </View>
                    </LinkWrapper>
                </View>
                <View style={styles.footer}>
                    <AppButton onPress={signOutHandler}
                               bgColor={THEME.DANGER_BG_COLOR}
                               color={THEME.DANGER_COLOR}>Sign out</AppButton>
                </View>
            </View>) : (
                <AppText>Loading...</AppText>
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        height: '100%',
        backgroundColor: '#fff',
    },
    head: {
        paddingVertical: 15,
    },
    name: {
        fontFamily: "Inter-Medium",
        fontSize: 17,
        textAlign: 'center'
    },
    imgBox: {
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginHorizontal: 'auto',
        marginBottom: 15,
        borderWidth: 2,
        borderColor: THEME.BORDER_MAIN_COLOR,
        borderRadius: 50,
    },
    nav: {
        borderWidth: 1,
        borderBottomWidth: 0,
        borderColor: THEME.GREY_COLOR,
        backgroundColor: THEME.GREY_COLOR_2
    },
    link: {
        padding: 12,
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: THEME.GREY_COLOR,
    },
    footer: {
        marginVertical: 16
    }
})