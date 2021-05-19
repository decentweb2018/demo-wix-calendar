import React from 'react'
import {Provider} from 'react-redux';
import AppLoading from 'expo-app-loading';
import {StatusBar} from "expo-status-bar";
import {useFonts} from 'expo-font';
import {THEME} from "./src/theme";
import store from './src/store';
import {MainNavigation} from "./src/navigation/MainNavigation";

export default function App() {
    let [fontsLoaded] = useFonts({
        'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
        'Inter-Medium': require('./assets/fonts/Inter-Medium.ttf'),
        'Inter-SemiBold': require('./assets/fonts/Inter-SemiBold.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading/>
    }

    return (
        <Provider store={store}>
            <MainNavigation/>
            <StatusBar backgroundColor={THEME.MAIN_COLOR}/>
        </Provider>
    )
}
