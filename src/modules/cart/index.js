import { ADD_TO_CART, CHANGE_QUANTITY, EMPTY_CART } from './actionTypes';
export * from './actions';

function addToCart(cartItems, product) {
    const existingProducts = cartItems.find(x => x.id == product.id);
    if (existingProducts) {
        return cartItems.map(x => {
            if (x.id == product.id) {
                x.qty += 1;
            }
            return x;
        })
    } else {
        const newItem = Object.assign({}, product, { qty: 1 });
        return cartItems.concat([newItem]);
    }
}

function changeQty(cartItems, productId, qty) {
    return cartItems.map(x => {
        if (x.id == productId) {
            x.qty = qty;
        }
        return x;
    }).filter(x => x.qty > 0);
}

export default function cart(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            return addToCart(state, action.product);
            break;
        case CHANGE_QUANTITY:
            return changeQty(state, action.product.id, action.quantity)
            break;
        case EMPTY_CART:
            return [];
            break;
        default:
            return state;
    }
}