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


export const postFavorite = (id) => dispatch => {
    setTimeout(() => {
        dispatch(addFavorite(id));
        
    }, 2000);
}

export const addFavorite = (id) => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: id
});