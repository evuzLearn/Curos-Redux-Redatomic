import { createStore, combineReducers } from 'redux';
import route from './modules/route';

export default function configureStore () {
    const appReducers = combineReducers({
        route
    })

    return createStore(appReducers)
}