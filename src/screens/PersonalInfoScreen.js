import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {THEME} from "../theme";
import clothingSizeData from "./data/clothingSizeData";
import skillsData from "./data/skillsData";
import {signIn} from "../store/actions/authActions";
import {AppText} from "../components/ui/AppText";
import {AppInput} from "../components/ui/AppInput";
import {AppButton} from "../components/ui/AppButton";
import {AppSelect} from "../components/ui/AppSelect";
import {PhotoPicker} from "../components/PhotoPicker";
import {AppCheckBox} from "../components/ui/AppCheckBox";
import {AppSelectLink} from "../components/ui/AppSelectLink";

export const PersonalInfoScreen = ({navigation}) => {
    const [validated, setValidated] = useState(true);
    const [newPassword, setNewPassword] = useState('');
    const [repeatNewPassword, setRepeatNewPassword] = useState('');
    const [idNumber, setIdNumber] = useState('');
    const [bankAccount, setBankAccount] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [clothingSize, setClothingSize] = useState('');
    const [skills, setSkills] = useState(skillsData);
    const [isSelected, setSelection] = useState(false);

    const submitHandler = () => {
        if (!!newPassword) {
            dispatch(signIn());
        } else {
            console.log('invalid');
            navigation.navigate('OnboardingNavigation')
            // setValidated(false);
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.alert}>
                <AppText style={styles.alertTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo nulla
                    velit lacus proin morbi libero ac.</AppText>
            </View>
            <View>
                <View style={{marginBottom: 35}}>
                    <AppInput label="Password"
                              placeholder="Enter new password"
                              value={newPassword}
                              onChange={setNewPassword}
                              secureTextEntry
                              inCorrect={validated}
                              subText="At least 8 characters, with letters and numbers"
                    />
                    <AppInput label="Repeat password"
                              placeholder="Enter new password"
                              value={repeatNewPassword}
                              onChange={setRepeatNewPassword}
                              secureTextEntry
                              marginBottom={0}
                              inCorrect={validated}/>
                </View>
                <View>
                    <AppInput label="ID number"
                              placeholder="e.g. 221100-111X"
                              value={idNumber}
                              onChange={setIdNumber}
                              inCorrect={validated}/>
                    <AppInput label="Bank account"
                              placeholder="Bank account number"
                              value={bankAccount}
                              onChange={setBankAccount}
                              inCorrect={validated}
                              subText="Some description if needed"/>
                    <AppInput label="Katuosoite"
                              placeholder="esim Veräjämäenpolku 3"
                              value={streetAddress}
                              onChange={setStreetAddress}
                              inCorrect={validated}/>
                    <AppInput label="Postinumero"
                              placeholder="esim 00002"
                              value={zipCode}
                              onChange={setZipCode}
                              inCorrect={validated}/>
                    <AppInput label="Kaupunki"
                              placeholder="esim Helsinki"
                              value={city}
                              onChange={setCity}
                              inCorrect={validated}/>
                </View>
                <View>
                    <AppSelect label="Vaatekoko"
                               data={clothingSizeData}
                               selectedValue={clothingSize}
                               setSelectedValue={setClothingSize}/>
                </View>
                <View>
                    <AppSelectLink label="Skills"
                                   placeholder="Select"
                                   redirect={() => navigation.navigate("Skills")}
                                   data={skillsData}
                                   selectedValue={skills}
                                   setSelectedValue={setSkills}/>
                </View>
                <View>
                    <PhotoPicker label="Profiilikuva"
                                 data={skillsData}
                                 selectedValue={skills}
                    />
                </View>
                <View>
                    <AppCheckBox onPressCallback={() => navigation.navigate('Agreement')}
                                 label="I agree with something. Okay."
                                 isSelected={isSelected}
                                 setSelection={setSelection}
                                 marginBottom={0}
                                 inCorrect={validated}
                    />
                </View>
            </View>
            <View style={{marginTop: 15, marginBottom: 30}}>
                <AppButton onPress={submitHandler} bgColor={THEME.MAIN_COLOR}>Jatka</AppButton>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    alert: {
        marginVertical: 15,
        padding: 12,
        backgroundColor: THEME.WARNING_BG_COLOR
    },
    alertTitle: {
        fontSize: 15,
        lineHeight: 24,
        color: THEME.WARNING_COLOR,
    },
    title: {
        marginVertical: 25,
        fontSize: 17,
        textAlign: 'center'
    }
})
