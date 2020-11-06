import { LISTINGS } from '../shared/Listing';
import * as ActionTypes from './ActionTypes';

export const Listings = (state = LISTINGS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LISTING:
            const listing = action.payload;
            listing.id = state.length;
            return state.concat(listing);
        default: 
            return state;
    }
};