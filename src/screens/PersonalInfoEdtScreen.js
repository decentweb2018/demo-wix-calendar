import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, Image} from 'react-native';
import {THEME} from "../theme";
import clothingSizeData from "./data/clothingSizeData";
import {AppText} from "../components/ui/AppText";
import {AppInput} from "../components/ui/AppInput";
import {AppButton} from "../components/ui/AppButton";
import {AppSelect} from "../components/ui/AppSelect";
import {PhotoPicker} from "../components/PhotoPicker";

export const PersonalInfoEdtScreen = ({navigation}) => {
    const [validated, setValidated] = useState(true);
    const [clothingSize, setClothingSize] = useState('M');

    const saveHandler = () => {
        console.log("saveHandler()");
        navigation.goBack();
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.head}>
                <PhotoPicker actived={true}/>
            </View>
            <View style={{marginBottom: 32}}>
                <AppInput label="Name"
                          placeholder="Name"
                          inCorrect={validated}
                />
                <AppInput label="Surname"
                          placeholder="Surname"
                          inCorrect={validated}
                />
                <AppInput label="Phone"
                          placeholder="Phone"
                          inCorrect={validated}
                />
                <AppInput label="Email"
                          placeholder="Email"
                          inCorrect={validated}
                />
                <View style={{marginBottom: 24}}>
                    <AppText style={styles.label}>Password</AppText>
                    <AppButton bgColor={THEME.SECONDARY_COLOR}
                               color={THEME.MAIN_COLOR}>Send reset link to email
                    </AppButton>
                </View>
                <AppInput label="ID number"
                          placeholder="ID number"
                          inCorrect={validated}
                          subText="Some description if needed"
                          marginBottom={16}
                />
                <AppInput label="Bank account"
                          placeholder="Bank account number"
                          inCorrect={validated}
                          subText="Some description if needed"
                          marginBottom={16}
                />
                <AppInput label="Address"
                          placeholder="Address"
                          inCorrect={validated}
                />
                <AppInput label="Zip code"
                          placeholder="Zip code"
                          inCorrect={validated}
                />
                <AppInput label="City"
                          placeholder="City"
                          inCorrect={validated}
                />
                <View>
                    <AppSelect label="Clothing size"
                               data={clothingSizeData}
                               selectedValue={clothingSize}
                               setSelectedValue={setClothingSize}
                               marginBottom={0}
                    />
                </View>
            </View>
            <View style={{marginBottom: 30}}>
                <AppButton onPress={saveHandler} bgColor={THEME.MAIN_COLOR}>Save</AppButton>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        backgroundColor: '#fff',
    },
    head: {
        paddingVertical: 15,
    },
    imgBox: {
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginHorizontal: 'auto',
        marginBottom: 15,
        borderWidth: 2,
        borderColor: THEME.BORDER_MAIN_COLOR,
        borderRadius: 50,
    },
    label: {
        fontSize: 15,
        marginLeft: 4,
        marginBottom: 6
    },
})
