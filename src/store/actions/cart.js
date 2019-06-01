import * as actionTypes from './actionTypes';

export const addToCart = (data) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: data,
    };
};

export const removeFromCart = (id) => {
    return {
        type: actionTypes.REMOVE_TO_CART,
        payload: id
    };
};

export const checkout = () => {
    return {
        type: actionTypes.CHECKOUT
    };
};