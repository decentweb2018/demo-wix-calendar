import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SelectMultiple from '@horizonlime/react-native-select-multiple';
import skillsData from "./data/skillsData";
import {SelectMultipleStyles} from "../theme";

export const SkillsScreen = () => {
    const [selectedSkills, setSelectedSkills] = useState([]);
    console.log(selectedSkills);
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <SelectMultiple
                    items={skillsData}
                    selectedItems={selectedSkills}
                    onSelectionsChange={setSelectedSkills}
                    style={styles.FlatList}
                    rowStyle={styles.rowStyle}
                    labelStyle={styles.labelStyle}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create(SelectMultipleStyles)