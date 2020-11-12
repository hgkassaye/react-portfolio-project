import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import { LISTINGS } from '../shared/Listing';

export const fetchListings = () => dispatch =>{
    dispatch(listingLoading())
    
    // setTimeout(() => {
    //     dispatch(renderListing(LISTINGS));
    // }, 2000);
    
    return fetch(baseUrl + 'listings')
        .then(response => response.json())
        .then(LISTINGS => dispatch(renderListing(LISTINGS)))
}

export const listingLoading = () => ({
    type: ActionTypes.LISTING_LOADING
});

export const listingFailed = (errMess) => ({
    type: ActionTypes.LISTING_FAILED,
    payload: errMess
})

export const renderListing = (listings) => ({
    type:ActionTypes.LISTING_RENDERED,
    payload: listings
});

export const addListing = (name, price,type,image) => ({
    type: ActionTypes.ADD_LISTING,
    payload: {
        name: name,
        price: price,
        type: type,
        image: image,
    }
});


// export const addListing = (listing) => ({
//     type: ActionTypes.ADD_LISTING,
//     payload: listing
// })

// export const postListing = (name, price, type, image) => dispatch => {
//     const newListing = {
//         name: name,
//         price: price, 
//         type: type, 
//         image: image,
//     };

//     return fetch(baseUrl + 'listings', {
//             method: "POST",
//             body: JSON.stringify(newListing),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         .then(response => {
//                 if (response.ok) {
//                     return response;
//                 } else {
//                     const error = new Error(`Error ${response.status}: ${response.statusText}`);
//                     error.response = response;
//                     throw error;
//                 }
//             }, 
//             error => { throw error; }
//         )
//         .then(response => response.json())
//         .then(response => dispatch(addListing(response)))
//         .catch(error => {
//             alert('Your comment could not be posted\n' + error.message);
//         });

// }

export const postFavorite = (id) => dispatch => {
    setTimeout(() => {
        dispatch(addFavorite(id));
        
    }, 2000);
}

export const addFavorite = (id) => ({
    type: ActionTypes.ADD_FAVORITE,
    payload: id
});