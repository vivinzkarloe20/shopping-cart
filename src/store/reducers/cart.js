import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cart: [],
    totalQty: 0,
    totalPrice: 0,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            const updatedQty = state.totalQty + action.payload.qty
            const updatedTotal = state.totalPrice + (action.payload.qty * action.payload.item.price)
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
                            qty: action.payload.qty,
                            subtotal: action.payload.qty * action.payload.item.price
                        }
                    ],
                    totalQty: updatedQty,
                    totalPrice: updatedTotal
                };
            }
            
        case actionTypes.REMOVE_TO_CART:
            const updatedCart = state.cart.filter(item => item.id !== action.payload);
            return {
                ...state,
                cart: updatedCart
            }
        case actionTypes.CHECKOUT:
            return initialState;
        default:
            return state;
    }
}

export default reducer;