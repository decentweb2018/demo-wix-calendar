import React from 'react';
import {View, StyleSheet, Platform, TouchableNativeFeedback, TouchableOpacity} from 'react-native';
import PropTypes from "prop-types";
import SvgUri from "expo-svg-uri";
import {THEME} from "../../theme";
import {general} from "./styles/styles";
import {AppText} from "../ui/AppText";

const JobLogFilled = ({date, state}) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
        <Wrapper activeOpacity={0.7}>
            <View style={{...styles.container, ...styles.border}}>
                <AppText style={{...general.title}}>
                    {date.day ? date.day : date}
                </AppText>
                <View style={styles.icon}>
                    <SvgUri source={require("../calendar/icons/JobLogFilled.svg")}/>
                </View>
            </View>
        </Wrapper>
    )
}

JobLogFilled.propTypes = {
    date: PropTypes.any,
    state: PropTypes.any,
    onPressCallback: PropTypes.func
}

const styles = StyleSheet.create({
    ...general,
    border: {
        borderWidth: 2,
        borderRadius: 50,
        borderColor: THEME.YELLOW_COLOR
    },
});

export default React.memo(JobLogFilled);