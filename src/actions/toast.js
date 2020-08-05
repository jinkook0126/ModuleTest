import {
    SHOW_TOAST,
    HIDE_TOAST
} from './ActionTypes';

export function onToastAlert(text) {
    return (dispatch,getState) =>{
        dispatch(showToast(null,null,text));
    }
}

export function onErrorAlert(text) {
    return (dispatch,getState) =>{
        dispatch(showToast('red','white',text));
    }
}

export function showToast(bgColor,txtColor,text) {
    return {
        type: SHOW_TOAST,
        bgColor,
        txtColor,
        text
    };
}

export function hideToast() {
    return {
        type: HIDE_TOAST
    };
}