import {
    ADD_RANGE_DATE,
    ADD_SELECTIONS_DATE,
    CREATE_AN_AVAILABILITY,
    GET_ALL_AVAILABILITIES,
    RESET_SELECTED_DAYS
} from "../types";

const initialState = {
    loading: true,
    rangeDate: {},
    selectionDate: {},
    mockData: [],
    flag: false,
}

const calendarReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_RANGE_DATE:
            return {
                ...state,
                rangeDate: {
                    ...state.rangeDate,
                    ...payload,
                }
            }
        case ADD_SELECTIONS_DATE:
            return {
                ...state,
                selectionDate: {
                    ...state.selectionDate,
                    ...payload,
                }
            }
        case RESET_SELECTED_DAYS:
            return {
                ...state,
                selectionDate: {},
                rangeDate: {},
                flag: !state.flag
            }
        case GET_ALL_AVAILABILITIES:
            return {
                ...state,
                mockData: payload,
            }
        case CREATE_AN_AVAILABILITY:
            return {
                ...state,
                flag: true
            }
        default:
            return state
    }
}

export default calendarReducer;
