import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {Calendar} from 'react-native-calendars';
import PropTypes from "prop-types";
import SvgUri from "expo-svg-uri";
import moment from "moment";
import {CalendarStyles, THEME} from "../theme";
import {AppButton} from "../components/ui/AppButton";
import {AppText} from "../components/ui/AppText";
import {getAllAvailabilities} from "../store/actions/calendarActions";
import {AppLoader} from "../components/ui/AppLoader";

export const CalendarScreen = ({route, navigation}) => {
    const dispatch = useDispatch();
    const currentDate = new Date().toISOString().slice(0, 10);
    const mockData = useSelector(state => state.calendar.mockData);
    const [markedDates, setMarkedDates] = useState({});
    const currentDateMarked = {[currentDate]: {marked: true, dotColor: THEME.INDIGO_COLOR}};
    const [differenceDays, setDifferenceDays] = useState({});
    const [flagChange, setFlagChange] = useState(false);
    const flag = useSelector(state => state.calendar.flag);
    const stylesForFullyAvailable = {
        customStyles: {
            container: {backgroundColor: THEME.MAIN_COLOR, borderRadius: 4},
            text: {color: 'white', fontWeight: 'bold'}
        }
    };

    const onDayPress = day => {
        navigation.navigate("JobOffer", {date: day})
    };

    useEffect(() => {
        console.log('useEffect(1)')
        dispatch(getAllAvailabilities(1));
    }, [dispatch, flag])

    useEffect(() => {
        console.log('useEffect(2)')
        const mockDatesArray = mockData.map(el => [
            el.start.slice(0, 10),
            el.end.slice(0, 10)
        ])
        mockDatesArray.forEach(el => {
            const startDay = el[0];
            const endDay = el[1];
            const startDayUTC = new Date(startDay);
            const endDayUFC = new Date(endDay);
            let diffTime = new Date(endDayUFC.getTime() - startDayUTC.getTime());
            let diffDays = diffTime.getUTCDate() - 2;
            if (diffDays !== 0) {
                for (let i = diffDays; i > 0; i--) {
                    let currentDiffDay = moment(endDayUFC).subtract(i, 'days');
                    let currentDiffDayString = currentDiffDay.toISOString().slice(0, 10);
                    setDifferenceDays(prev => ({
                        ...prev,
                        [startDay]: stylesForFullyAvailable,
                        [currentDiffDayString]: stylesForFullyAvailable,
                        [endDay]: stylesForFullyAvailable,
                    }));
                }
            } else {
                setDifferenceDays(prev => ({
                    ...prev,
                    [startDay]: stylesForFullyAvailable,
                    [endDay]: stylesForFullyAvailable,
                }));
            }
        })
        setFlagChange(!flagChange);
    }, [mockData, flag])

    useEffect(() => {
        console.log('useEffect(3)')
        setMarkedDates({
            ...currentDateMarked,
            ...differenceDays,
        })
    }, [flagChange, flag])

    return (
        <ScrollView style={{backgroundColor: '#fff'}}>
            <View style={styles.container}>

                {/*********************************** Mock ***********************************/}
                <View style={{marginVertical: 10, backgroundColor: THEME.SECONDARY_COLOR}}>
                    <View style={{padding: 5}}>
                        {mockData.length !== 0 ? mockData.map((el, number) => (
                            <AppText style={{fontSize: 11, textAlign: 'center', marginVertical: 3}}
                                     key={el.id}>({number}) {el.start} || {el.end}</AppText>
                        )) : <AppLoader/>}
                    </View>
                </View>
                {/*********************************** Mock ***********************************/}

                <View>
                    <Calendar
                        onDayPress={onDayPress}
                        theme={CalendarStyles}
                        firstDay={1}
                        markingType={'custom'}
                        markedDates={markedDates}
                    />
                </View>
                <View style={styles.buttonsBox}>
                    <AppButton onPress={() => navigation.navigate("CalendarDateSelection")}
                               style={{marginBottom: 15}}
                               bgColor={THEME.MAIN_COLOR}>Dates selection</AppButton>
                    <AppButton onPress={() => navigation.navigate("CalendarDatesRange")}
                               bgColor={THEME.SECONDARY_COLOR}
                               color={THEME.MAIN_COLOR}>Dates range</AppButton>
                </View>
                <View>
                    <AppText>Upcoming Jobs</AppText>
                    <View style={styles.alert}>
                        <SvgUri style={styles.alertIcon} source={require("../images/attention.svg")}/>
                        <AppText style={styles.alertTitle}>
                            Currently You don’t have any upcoming jobs.
                            Please, edit availability so employers may hire you.
                        </AppText>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

CalendarScreen.propTypes = {
    navigation: PropTypes.object
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        height: '100%',
    },
    buttonsBox: {
        marginVertical: 25
    },
    alert: {
        marginVertical: 15,
        paddingVertical: 12,
        paddingLeft: 55,
        paddingRight: 15,
        backgroundColor: THEME.PRIMARY_COLOR
    },
    alertTitle: {
        fontSize: 14,
        lineHeight: 24,
        color: THEME.GREY_COLOR_3,
    },
    alertIcon: {
        position: 'absolute',
        top: '50%',
        left: 15,
    }
})

