import axios from "axios";
import * as SecureStore from 'expo-secure-store'
import {GET_MY_PROFILE, AUTH_NOT_VALID, REFRESH_TOKEN, SIGN_IN, SIGN_OUT} from "../types";
import {_apiBase, errorMessage} from "../../constants";

export function signIn(profile) {
    return async dispatch => {
        try {
            console.log(profile);
            axios.post(`${_apiBase}/signin/Employee`, profile)
                .then((response) => {
                    const access_token = response.data.token.toString();
                    axios.defaults.headers.common["Authorization"] = access_token;
                    SecureStore.setItemAsync('token', access_token);
                    console.log("signIn.token:", access_token);
                    if (!!access_token) {
                        dispatch({
                            type: SIGN_IN,
                            payload: access_token
                        })
                    }
                }).then(() => dispatch(getUserInfo()))
                .catch((e) => {
                    console.log("signIn.catch", e);
                    console.log("NOT_VALID");
                    dispatch({
                        type: AUTH_NOT_VALID
                    })
                })
        } catch (e) {
            console.error(errorMessage)
        }
    }
}

export function getUserInfo() {
    console.log("getUserInfo()");
    return async dispatch => {
        axios.get(`${_apiBase}/profile`)
            .then((response) => {
                const profileInfo = response.data.profile;
                // console.log(profileInfo);
                dispatch({
                    type: GET_MY_PROFILE,
                    payload: profileInfo
                })
            }).catch(e => console.log('getUserInfo.catch', e))
    }
}

export function refreshToken() {
    console.log("refreshToken()");
    return async dispatch => {
        const promise = new Promise(function (resolve, reject) {
            resolve(SecureStore.getItemAsync('token'))
            reject(console.log('You\'re not authorized!!!'))
        });
        promise.then((token) => {
            axios.defaults.headers.common["Authorization"] = token;
            if (token) {
                dispatch({
                    type: REFRESH_TOKEN,
                    payload: token
                })
                dispatch(getUserInfo())
            } else {
                console.log("You're not authorized!");
            }
        })

    }
}

export function signOut() {
    console.log("signOut()");
    return async dispatch => {
        await SecureStore.deleteItemAsync('token');
        dispatch({
            type: SIGN_OUT
        })
    }
}

