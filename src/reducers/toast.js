import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    status: false,
    bgColor : null,
    txtColor: null,
    text: ''
};

export default function toast(state, action) {
    if(typeof state === "undefined")
        state = initialState;
    switch(action.type) {
        case types.SHOW_TOAST:
            return update(state, {
                status: { $set: true },
                bgColor: { $set: action.bgColor },
                txtColor: { $set: action.txtColor },
                text: { $set: action.text }
            });
        case types.HIDE_TOAST:
            return update(state, {
                status: { $set: false }
            });
        default:
            return state;
    }
}