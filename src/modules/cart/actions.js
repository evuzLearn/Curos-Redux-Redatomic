import { ADD_TO_CART, CHANGE_QUANTITY, EMPTY_CART } from './actionTypes';

export function addToCart(producto) {
    return {
        return: ADD_TO_CART,
        product
    }
}

export function changeQty(product, quantity) {
    return {
        type: CHANGE_QUANTITY,
        product,
        quantity
    }
}

export function emptyCart(product) {
    return {
        type: EMPTY_CART
    }
}