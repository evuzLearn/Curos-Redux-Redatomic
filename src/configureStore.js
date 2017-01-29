import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import route from './modules/route';
import catalog from './modules/catalog';
import cart from './modules/cart';

export default function configureStore () {
    const appReducers = combineReducers({
        route,
        catalog,
        cart
    })

    return createStore(appReducers, applyMiddleware(thunk));
}