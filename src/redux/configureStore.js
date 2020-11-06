import { createStore, combineReducers } from 'redux';
import { Listings } from './listings';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            listings: Listings,
        })
    );

    return store;
}