import {
    FETCH_PRODUCTS_FAIL, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ATTEMPT
} from './actionTypes';
import { get } from '../../lib/api';

export function fetchProducts() {
    return (dispatch) => {
        dispatch({
            type: FETCH_PRODUCTS_ATTEMPT
        });
        get('/api/products.json')
            .then(products => {
                dispatch({
                    type: FETCH_PRODUCTS_SUCCESS,
                    payload: products
                })
            })
            .catch(err => {
                dispatch({
                    type: FETCH_PRODUCTS_FAIL,
                    error: err
                })
            })
    }
}