import {
    FETCH_PRODUCTS_FAIL, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_ATTEMPT
} from './actionTypes';
import { get } from '../../lib/api';
import { schema, arrayOf, normalize } from 'normalizr';

const productSchema = new schema.Entity('products');

export function fetchProducts() {
    return (dispatch) => {
        dispatch({
            type: FETCH_PRODUCTS_ATTEMPT
        });
        get('/api/products.json')
            .then(products => {
            const normalized = normalize(products, [productSchema]);
                dispatch({
                    type: FETCH_PRODUCTS_SUCCESS,
                    payload: normalized
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