import * as actionTypes from './actionTypes';

export const addToCart = (data) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: data,
    };
};

export const removeFromCart = (item) => {
    return {
        type: actionTypes.REMOVE_TO_CART,
        payload: item
    };
};

export const checkout = () => {
    return {
        type: actionTypes.CHECKOUT
    };
};