import axios from "axios";
import {GET_ALL_JOB_EVENTS} from "../types";
import {_apiBase} from "../../constants";

export function getAllJobEvents() {
    return async dispatch => {
        try {
            axios.get(`${_apiBase}/jobevents`)
                .then(res => {
                    console.log(res.data);
                    dispatch({
                        type: GET_ALL_JOB_EVENTS,
                        payload: res.data
                    })
                })
                .catch((error) => console.log("Catch:", error));
        } catch (e) {
            console.error(e)
        }
    }
}