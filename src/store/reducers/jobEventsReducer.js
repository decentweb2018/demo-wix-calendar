import {GET_ALL_JOB_EVENTS} from "../types";

const initialState = {
    loading: true,
    jobEvents: [],
}

const jobEventsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_ALL_JOB_EVENTS:
            return {
                ...state,
                jobEvents: [
                    ...state.jobEvents,
                    ...payload
                ]
            }
        default:
            return state
    }
}

export default jobEventsReducer;
