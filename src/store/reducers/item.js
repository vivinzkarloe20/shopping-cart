import uuid from 'uuid';

const initialState = {
    items: [
        {id: uuid(), name: 'Cereal', price: 0.99},
        {id: uuid(), name: 'Milk', price: 1.99},
        {id: uuid(), name: 'Eggs', price: 2.99},
        {id: uuid(), name: 'Beef', price: 5.99},
        {id: uuid(), name: 'Fish', price: 3.99},
        {id: uuid(), name: 'Bread', price: 2.99}
    ]
}

const reducer = (state = initialState, action) => {
    return state;
}

export default reducer;