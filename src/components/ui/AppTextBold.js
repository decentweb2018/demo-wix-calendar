import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {THEME} from "../../theme";

export const AppTextBold = ({style, children, onPressCallback}) => (
    <Text onPress={onPressCallback} style={{...styles.default, ...style}}>{children}</Text>
)

const styles = StyleSheet.create({
    default: {
        fontFamily: 'Inter-SemiBold',
        color: THEME.TEXT_MAIN_COLOR
    },
});
