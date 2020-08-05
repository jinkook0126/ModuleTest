import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    status: false
};

export default function spinner(state, action) {
    if(typeof state === "undefined")
        state = initialState;

    switch(action.type) {
        case types.SHOW_SPINNER:
            return update(state, {
                status: { $set: true }
            });
        case types.HIDE_SPINNER:
            return update(state, {
                status: { $set: false }
            });
        default:
            return state;
    }
}