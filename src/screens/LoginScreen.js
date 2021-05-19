import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {THEME} from "../theme";
import {signIn} from "../store/actions/authActions";
import {AppInput} from "../components/ui/AppInput";
import {AppButton} from "../components/ui/AppButton";
import {AppText} from "../components/ui/AppText";

export const LoginScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('e1@gmail.com');
    const [password, setPassword] = useState('password');
    const validated = useSelector(state => state.auth.validate)

    const submitHandler = () => {
        if (!!email && !!password) {
            dispatch(signIn({email, password}));
        }
    }

    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
                <AppText  style={{fontSize: 20}}>Company Name</AppText>
            </View>
            <View style={styles.form}>
                <AppInput label="Email"
                          placeholder="Syötä email"
                          value={email}
                          onChange={setEmail}
                          inCorrect={validated}/>
                <AppInput label="Salasana"
                          placeholder="Kirjoita salasana"
                          value={password}
                          secureTextEntry
                          onChange={setPassword}
                          inCorrect={validated}/>
                <View style={styles.submitButtonWrap}>
                    <View style={{marginBottom: 20}}>
                        <AppButton onPress={submitHandler} bgColor={THEME.MAIN_COLOR}>
                            Kirjaudu sisäänS
                        </AppButton>
                    </View>
                    <View>
                        <AppButton onPress={() => navigation.navigate('Password Reset')} color={THEME.MAIN_COLOR}
                                   bgColor={THEME.SECONDARY_COLOR}>
                            Onko salasana kateissa?
                        </AppButton>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 60,
        paddingHorizontal: 20,
        height: "100%",
        backgroundColor: '#fff'
    },
    logo: {
        width: 113,
        height: 24,
    },
    form: {
        marginTop: 50,
    },
    submitButtonWrap: {
        marginTop: 6,
    },
})
