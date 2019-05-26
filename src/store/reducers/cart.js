import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cart: [],
    totalQty: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const updatedQty = state.totalQty + action.payload.qty

            if(action.payload.qty === 0){
                return {
                    ...state,
                    cart: [...state.cart]
                };
            }else{
                return {
                    ...state,
                    cart: [
                        ...state.cart,
                        {...action.payload.item,
                        qty: action.payload.qty}
                    ],
                    totalQty: updatedQty
                };
            }
            
        case actionTypes.REMOVE_TO_CART:
            return state;
        case actionTypes.CLEAR_CART:
            return state;
        default:
            return state;
    }
}

export default reducer;