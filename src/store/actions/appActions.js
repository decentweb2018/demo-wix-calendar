import {
    DISABLE_BUTTONS,
    ENABLE_BUTTONS,
    HIDE_ALERT,
    HIDE_LOADER,
    HIDE_MODAL,
    SHOW_ALERT,
    SHOW_LOADER,
    SHOW_MODAL
} from "../types";

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function showAlert(color, text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: {color, text}
        })
    }
}

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

export function showModal() {
    return {
        type: SHOW_MODAL
    }
}

export function hideModal() {
    return {
        type: HIDE_MODAL
    }
}

export function enable_buttons() {
    return {
        type: ENABLE_BUTTONS
    }
}

export function disable_buttons() {
    return {
        type: DISABLE_BUTTONS
    }
}