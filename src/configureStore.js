import { createStore, combineReducers } from 'redux';
import route from './modules/route';
import catalog from './modules/catalog';

export default function configureStore () {
    const appReducers = combineReducers({
        route,
        catalog
    })

    return createStore(appReducers)
}