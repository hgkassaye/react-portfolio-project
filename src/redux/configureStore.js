import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Listings } from './listings';
import { Favorites } from './Favorites';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            listings: Listings, 
            favorites: Favorites
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}