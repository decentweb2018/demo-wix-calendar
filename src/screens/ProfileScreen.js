import React from 'react';
import {View} from 'react-native';
import {useDispatch} from "react-redux";
import {THEME} from "../theme";
import {AppButton} from "../components/ui/AppButton";
import {signOut} from "../store/actions/authActions";

export const ProfileScreen = () => {
    const dispatch = useDispatch();
    return (
        <View style={{flex: 1, justifyContent: 'center', paddingHorizontal: 15}}>
            <AppButton onPress={() => dispatch(signOut())}
                       bgColor={THEME.DANGER_COLOR}>Sign Out</AppButton>
        </View>
    )
}