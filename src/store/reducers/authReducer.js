import {GET_MY_PROFILE, AUTH_NOT_VALID, REFRESH_TOKEN, SIGN_IN, SIGN_OUT} from "../types";

const initialState = {
    auth: false,
    token: null,
    profile: null,
    validate: true,
    loading: true,
}

const authReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SIGN_IN:
            return {
                ...state,
                auth: true,
                validate: true,
                token: payload,
            }
        case SIGN_OUT:
            return {
                ...state,
                auth: false,
                token: null
            }
        case GET_MY_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false,
            }
        case REFRESH_TOKEN:
            return {
                ...state,
                auth: true,
                token: payload
            }
        case AUTH_NOT_VALID:
            return {
                ...state,
                validate: false
            }
        default:
            return state
    }
}

export default authReducer;
