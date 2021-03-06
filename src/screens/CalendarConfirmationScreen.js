import React, {Fragment} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {THEME} from "../theme";
import {AppText} from "../components/ui/AppText";
import {AppButton} from "../components/ui/AppButton";
import {AppTextBold} from "../components/ui/AppTextBold";
import {clearAllSelectedDate, createAnAvailability} from "../store/actions/calendarActions";

export const CalendarConfirmationScreen = ({route, navigation}) => {
    const dispatch = useDispatch();
    const flagChange = useSelector(state => state.calendar.flag);
    let daysState = null;
    let daysArray = [];
    let startDay = null;
    let endDay = null;

    if (route.params.type === 'range') {
        daysState = useSelector(state => state.calendar.rangeDate);
        daysArray = Object.keys(daysState);
        startDay = daysArray[0];
        endDay = daysArray[daysArray.length - 1];
    } else if (route.params.type === 'selection') {
        daysState = useSelector(state => state.calendar.selectionDate);
        daysArray = Object.keys(daysState);
    }

    const onDoneHandler = () => {
        const start = new Date(startDay);
        const end = new Date(endDay);
        dispatch(createAnAvailability(start, end));
        dispatch(clearAllSelectedDate());
        navigation.navigate("Calendar", {flag: !flagChange, status: route.params.status});
    }

    return (
        <ScrollView style={{backgroundColor: '#fff'}}>
            <View style={styles.container}>
                <View>
                    <AppText
                        style={styles.label}>
                        Fully {(route.params.status === 'notAvailable') ? 'not' : null}
                        available dates {startDay && endDay ? "range" : "set"}
                    </AppText>
                    <View>
                        {!startDay && !endDay ? daysArray.map((day, number) => (
                            <View key={number} style={styles.box}>
                                <AppTextBold
                                    style={styles.dd}>{day}</AppTextBold>
                            </View>
                        )) : (
                            <Fragment>
                                <View style={styles.box}>
                                    <AppText style={styles.dt}>Start date:</AppText>
                                    <AppTextBold
                                        style={styles.dd}>{startDay ? startDay : 'NuN'}</AppTextBold>
                                </View>
                                <View style={styles.box}>
                                    <AppText style={styles.dt}>End date:</AppText>
                                    <AppTextBold
                                        style={styles.dd}>{endDay ? endDay : 'NuN'}</AppTextBold>
                                </View>
                            </Fragment>
                        )}
                    </View>
                </View>
                <View style={{marginVertical: 25}}>
                    <AppButton onPress={onDoneHandler}
                               bgColor={THEME.MAIN_COLOR}>Done</AppButton>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        height: '100%',
    },
    label: {
        marginBottom: 5,
        fontSize: 15
    },
    box: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        backgroundColor: THEME.GREY_COLOR_2
    },
    dt: {
        marginRight: 4,
        fontSize: 15
    },
    dd: {
        fontSize: 17
    }
})

