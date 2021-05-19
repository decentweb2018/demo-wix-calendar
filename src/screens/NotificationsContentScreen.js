import React, {useEffect} from 'react';
import {Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import SvgUri from "expo-svg-uri";
import {BoxesStyles, THEME} from "../theme";
import {AppText} from "../components/ui/AppText";
import {getAllJobEvents} from "../store/actions/jobEventsActions";
import {AppButton} from "../components/ui/AppButton";

export const NotificationsContentScreen = ({navigation}) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    const dispatch = useDispatch();
    const activeFlag = true;
    const jobEvents = useSelector(state => state.jobEvents.jobEvents)

    useEffect(() => {
        dispatch(getAllJobEvents())
    }, [dispatch])

    return (
        <View style={styles.container}>
            <View>
                {jobEvents.length ? jobEvents.map((el, number) => <AppText key={number}>el</AppText>) : (
                    <AppText style={{marginBottom: 15}}>Null...</AppText>
                )}
            </View>

            <AppButton onPress={() => dispatch(getAllJobEvents())} bgColor={THEME.MAIN_COLOR}>Fetch</AppButton>

            {activeFlag ? (
                <Wrapper onPress={() => navigation.navigate("JobOffer")}>
                    <View style={{...styles.box, ...styles.boxActive}}>
                        <View style={styles.boxTitleWrap}>
                            <View style={styles.activeDot}/>
                            <AppText style={styles.boxTitle}>New Job Offer</AppText>
                        </View>
                        <AppText style={styles.boxSubTitle}>Job role</AppText>
                        <AppText style={styles.boxDesc}>Job Location</AppText>
                        <AppText style={styles.boxDesc}>Yesterday, 12:49</AppText>
                        <View style={styles.arrow}>
                            <SvgUri style={styles.arrowImg} source={require("../images/arrow-right.svg")}/>
                        </View>
                    </View>
                </Wrapper>
            ) : (
                <Wrapper onPress={() => navigation.navigate("JobOffer")}>
                    <View style={styles.box}>
                        <View style={styles.boxTitleWrap}>
                            <AppText style={styles.boxTitle}>New Job Offer</AppText>
                        </View>
                        <AppText style={styles.boxSubTitle}>Job role</AppText>
                        <AppText style={styles.boxDesc}>Job Location</AppText>
                        <AppText style={styles.boxDesc}>Yesterday, 12:49</AppText>
                        <View style={styles.arrow}>
                            <SvgUri style={styles.arrowImg} source={require("../images/arrow-right.svg")}/>
                        </View>
                    </View>
                </Wrapper>
            )}

            {/********** Mock **********/}
            {/*<Wrapper onPress={() => navigation.navigate("JobOffer")}>*/}
            {/*    <View style={styles.box}>*/}
            {/*        <View style={styles.boxTitleWrap}>*/}
            {/*            <AppText style={styles.boxTitle}>Job Offer Reminder</AppText>*/}
            {/*        </View>*/}
            {/*        <AppText style={styles.boxSubTitle}>Job role</AppText>*/}
            {/*        <AppText style={styles.boxDesc}>Job Location</AppText>*/}
            {/*        <AppText style={styles.boxDesc}>22 hour ago</AppText>*/}
            {/*        <View style={styles.arrow}>*/}
            {/*            <SvgUri style={styles.arrowImg} source={require("../images/arrow-right.svg")}/>*/}
            {/*        </View>*/}
            {/*    </View>*/}
            {/*</Wrapper>*/}
            {/********** Mock **********/}

        </View>
    )
}

const styles = StyleSheet.create(BoxesStyles)