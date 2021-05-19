import React, {useEffect} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {LoginNavigation} from "./LoginNavigation";
import {AppNavigation} from "./AppNavigation";
import {refreshToken} from "../store/actions/authActions";

export const MainNavigation = () => {
    const dispatch = useDispatch();
    const isSignedIn = useSelector(state => state.auth.auth)

    useEffect(() => {
        dispatch(refreshToken())
    }, [dispatch])

    return (
        <NavigationContainer>
            {isSignedIn ? <AppNavigation/> : <LoginNavigation/>}
        </NavigationContainer>
    )
}
