import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import SelectMultiple from '@horizonlime/react-native-select-multiple';
import {SelectMultipleStyles} from "../theme";
import certificatesData from "./data/certificatesData";

export const CertificatesScreen = () => {
    const [selectedCertificates, setSelectedCertificates] = useState([]);
    console.log(selectedCertificates);

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <SelectMultiple
                    items={certificatesData}
                    selectedItems={selectedCertificates}
                    onSelectionsChange={setSelectedCertificates}
                    style={styles.FlatList}
                    rowStyle={styles.rowStyle}
                    labelStyle={styles.labelStyle}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create(SelectMultipleStyles)