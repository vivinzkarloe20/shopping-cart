import * as actionTypes from './actionTypes';

export const addToCart = (data) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: data,
    };
};

export const removeToCart = () => {
    return {
        type: actionTypes.REMOVE_TO_CART
    };
};

export const clearCart = () => {
    return {
        type: actionTypes.CLEAR_CART
    };
};