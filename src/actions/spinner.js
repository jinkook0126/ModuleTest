import {
    SHOW_SPINNER,
    HIDE_SPINNER
} from './ActionTypes';

export function showSpinner() {
    return {
        type: SHOW_SPINNER
    };
}

export function hideSpinner() {
    return {
        type: HIDE_SPINNER
    };
}