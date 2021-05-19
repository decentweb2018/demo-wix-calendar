import {combineReducers} from "redux";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import calendarReducer from "./calendarReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    calendar: calendarReducer
})