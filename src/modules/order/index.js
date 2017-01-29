import { combineReducers } from 'redux';
import { SAVE_DETAILS, SAVE_ERRORS, CLEAR_ERRORS } from './actionTypes';
export * from './actions';


const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    address: ''
}


function details(state = initialState, action) {
    switch (action.type) {
        case SAVE_DETAILS:
            return Object.assign({}, state, action.payload);
            break;
        default:
            return state;
    }
}

function errors(state = [], action) {
    switch (action.type) {
        case SAVE_ERRORS:
            return actions.errors;
            break;
        case CLEAR_ERRORS:
            return {};
            break;
        default:
            return state;
    }
}

export default combineReducers({
    errors,
    details
})
