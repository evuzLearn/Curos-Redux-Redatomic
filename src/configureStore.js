import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import route from './modules/route';
import catalog from './modules/catalog';
import cart from './modules/cart';
import order from './modules/order';

export default function configureStore () {
    const appReducers = combineReducers({
        route,
        catalog,
        cart,
        order
    });

    return createStore(appReducers, applyMiddleware(thunk));
}