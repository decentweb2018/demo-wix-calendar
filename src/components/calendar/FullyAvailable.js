import React from 'react';
import {View, StyleSheet, Platform, TouchableNativeFeedback, TouchableOpacity} from 'react-native';
import PropTypes from "prop-types";
import {THEME} from "../../theme";
import {general} from "./styles/styles";
import {AppText} from "../ui/AppText";

const FullyAvailable = ({date, state}) => {
    const Wrapper = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    return (
        <Wrapper activeOpacity={0.7}>
            <View style={{...styles.container, ...styles.border}}>
                <AppText style={{...general.title}}>
                    {date.day ? date.day : date}
                </AppText>
            </View>
        </Wrapper>
    )
}

FullyAvailable.propTypes = {
    date: PropTypes.any,
    state: PropTypes.any,
    onPressCallback: PropTypes.func
}

const styles = StyleSheet.create({
    ...general,
    border: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: THEME.GREEN_COLOR,
        backgroundColor: THEME.SECONDARY_COLOR
    }
});

export default React.memo(FullyAvailable);