import {
    FETCH_PRODUCTS_FAIL, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ATTEMPT
} from './actionTypes';
import { combineReducers } from 'redux';
export * from './actions';

function isFetching(state = false, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_ATTEMPT:
            return true;
        case FETCH_PRODUCTS_FAIL:
        case FETCH_PRODUCTS_SUCCESS:
            return false;
        default:
            return state;
    }
}

function errors(state = {}, action) {
    switch (action.type) {
        case FETCH_PRODUCTS_FAIL:
            return action.error;
        case FETCH_PRODUCTS_SUCCESS:
        case FETCH_PRODUCTS_ATTEMPT:
            return {}
        default:
            return state;
    }
}

export function products(state = [], action) {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    isFetching,
    errors,
    products
})