import * as ActionTypes from './ActionTypes';

export const addListing = (name, price,type,image) => ({
    type: ActionTypes.ADD_LISTING,
    payload: {
        name: name,
        price: price,
        type: type,
        image: image,
    }
});