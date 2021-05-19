import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {Calendar} from 'react-native-calendars';
import SvgUri from "expo-svg-uri";
import {CalendarStyles, THEME} from "../theme";
import {AppButton} from "../components/ui/AppButton";
import {AppText} from "../components/ui/AppText";
import {addSelectionDate} from "../store/actions/calendarActions";

export const CalendarDateSelectionScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const currentDate = new Date().toISOString().slice(0, 10);
    const currentDateMarked = {[currentDate]: {marked: true, dotColor: THEME.INDIGO_COLOR}};
    const selectedDate = useSelector(state => state.calendar.selectionDate);
    const [markedDates, setMarkedDates] = useState({});

    const onDayPress = day => {
        dispatch(addSelectionDate(day.dateString))
    };

    const fullyAvailableHandler = (days) => {
        navigation.navigate("CalendarConfirmation", {type: 'selection'})
    }

    const partlyAvailableHandler = (days) => {
        navigation.navigate("CalendarEditingAvailability", {type: 'selection'})
    }

    const notAvailableHandler = (days) => {
        navigation.navigate("CalendarConfirmation", {type: 'selection'})
    }

    useEffect(() => {
        setMarkedDates({
            ...currentDateMarked,
            ...selectedDate
        })
        console.log(selectedDate)
    }, [selectedDate])

    return (
        <ScrollView style={{backgroundColor: '#fff'}}>
            <View style={styles.container}>
                <View>
                    <Calendar
                        firstDay={1}
                        onDayPress={onDayPress}
                        markedDates={markedDates}
                        theme={CalendarStyles}
                    />
                </View>
                {(Object.keys(selectedDate).length == 0) ? (
                    <View style={styles.alert}>
                        <SvgUri style={styles.alertIcon} source={require("../images/attention.svg")}/>
                        <AppText style={styles.alertTitle}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, blandit urna sed aliquam est
                            elit massa a faucibus. Etiam vestibulum dictumst dignissim.
                        </AppText>
                    </View>
                ) : (
                    <View style={{marginVertical: 15}}>

                        {/*<View style={{marginBottom: 15}}>*/}
                        {/*    <AppButton onPress={() => dispatch(clearAllSelectedDate())}*/}
                        {/*               bgColor={THEME.WARNING_BG_COLOR}*/}
                        {/*               color={THEME.WARNING_COLOR}>Clear All*/}
                        {/*    </AppButton>*/}
                        {/*</View>*/}

                        <AppButton onPress={() => fullyAvailableHandler(selectedDate)}
                                   style={{marginBottom: 8}}
                                   bgColor={THEME.MAIN_COLOR}>Fully available</AppButton>
                        <AppButton
                            onPress={() => partlyAvailableHandler(selectedDate)}
                            style={{marginBottom: 8}}
                            bgColor={THEME.SECONDARY_COLOR}
                            color={THEME.MAIN_COLOR}>Partly available</AppButton>
                        <AppButton onPress={() => notAvailableHandler(selectedDate)}
                                   bgColor={THEME.DANGER_BG_COLOR}
                                   color={THEME.DANGER_COLOR}>Not available</AppButton>
                    </View>
                )}
            </View>
        </ScrollView>
    )
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
        marginVertical: 20,
        paddingVertical: 12,
        paddingLeft: 55,
        paddingRight: 15,
        backgroundColor: THEME.PRIMARY_COLOR
    },
    alertTitle: {
        fontSize: 15,
        lineHeight: 24,
        color: THEME.GREY_COLOR_3,
    },
    alertIcon: {
        position: 'absolute',
        top: '50%',
        left: 15,
    }
})

