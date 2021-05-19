import axios from "axios";
import {
    ADD_RANGE_DATE,
    ADD_SELECTIONS_DATE, CREATE_AN_AVAILABILITY,
    GET_ALL_AVAILABILITIES,
    RESET_SELECTED_DAYS
} from "../types";
import {THEME} from "../../theme";
import {_apiBase} from "../../constants";

export function addSelectionDate(date) {
    return async dispatch => {
        try {
            dispatch({
                type: ADD_SELECTIONS_DATE,
                payload: {[date]: {selected: true, selectedColor: THEME.PRIMARY_COLOR_2, textColor: 'white'}}
            })
        } catch (e) {
            console.error(e)
        }
    }
}

export function addRangesDate(date) {
    return async dispatch => {
        try {
            dispatch({
                type: ADD_RANGE_DATE,
                payload: date
            })
        } catch (e) {
            console.error(e)
        }
    }
}

export function clearAllSelectedDate() {
    return async dispatch => {
        try {
            console.log("clearAllSelectedDate()")
            dispatch({
                type: RESET_SELECTED_DAYS
            })
        } catch (e) {
            console.error(e)
        }
    }
}

export function getAllAvailabilities(id) {
    return async dispatch => {
        try {
            axios.get(`${_apiBase}/employees/${id}/availabilities`)
                .then(res => {
                    console.log(res.data);
                    dispatch({
                        type: GET_ALL_AVAILABILITIES,
                        payload: res.data
                    })
                })
                .catch((e) => console.log("Catch:", e));
        } catch (e) {
            console.error(e)
        }
    }
}

export function createAnAvailability(start, end) {
    return async dispatch => {
        try {
            axios.post(`${_apiBase}/employees/_/availability?force=true`,
                {start, end})
                .then(res => {
                    console.log(res.data)
                    dispatch({
                        type: CREATE_AN_AVAILABILITY,
                    })
                })
                .catch((error) => console.log("Catch:", error));
        } catch (e) {
            console.error(e)
        }
    }
}