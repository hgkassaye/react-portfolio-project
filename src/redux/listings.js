import { LISTINGS } from '../shared/Listing';
import * as ActionTypes from './ActionTypes';

// export const Listings = (state = LISTINGS, action) => {
//     switch (action.type) {
//         case ActionTypes.ADD_LISTING:
//             const listing = action.payload;
//             listing.id = state.length;
//             return state.concat(listing);
//         default: 
//             return state;
//     }
// };

export const Listings = (state = {isLoading: true, errMess: null, listings: []}, action) => {
    switch (action.type) {
        case ActionTypes.LISTING_RENDERED:
            return {...state, isLoading: false, errMess: null, listings: action.payload};
        case ActionTypes.LISTING_LOADING:
            return {...state, isLoading: true, errMess: null, listings:[]};
        case ActionTypes.LISTING_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        case ActionTypes.ADD_LISTING:
            const listing = action.payload;
            // listing.id = state.length;
            return {...state, listings: state.listings.concat(listing)}
        default: 
            return state;
    }
}