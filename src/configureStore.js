import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import catalog from './modules/catalog';
import cart from './modules/cart';
import order from './modules/order';

export default function configureStore() {
    const appReducers = combineReducers({
        catalog,
        cart,
        order
    });
    let enhacer;
    if (process.env.NODE_ENV === 'development') {
        enhacer = compose(
            applyMiddleware(thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    } else {
        enhacer = applyMiddleware(thunk);
    }

    return createStore(appReducers, enhacer);
}