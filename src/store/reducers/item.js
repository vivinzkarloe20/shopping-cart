import uuid from 'uuid';

const initialState = {
    items: [
        {id: uuid(), name: 'EVGA GeForce GTX 1070', price: 583.00},
        {id: uuid(), name: 'MSI Gaming X GeForce GTX 1080 Ti', price: 1290.00},
        {id: uuid(), name: 'Intel Core i9-9900K', price: 484.99},
        {id: uuid(), name: 'Intel Core i7-8700K', price: 349.99},
        {id: uuid(), name: 'Corsair Vengeance LPX 16 GB', price: 79.99},
        {id: uuid(), name: 'G.Skill Trident Z RGB 16 GB', price: 116.48},
        {id: uuid(), name: 'Western Digital Caviar Blue', price: 42.89},
        {id: uuid(), name: 'Seagate Barracuda', price: 59.89},
        {id: uuid(), name: 'NZXT H500', price: 69.99},
        {id: uuid(), name: 'Cooler Master MasterBox Q300', price: 39.99},
        {id: uuid(), name: 'Corsair CXM', price: 59.89},
        {id: uuid(), name: 'EVGA SuperNOVA G3', price: 104.89},
        {id: uuid(), name: 'MSI B450 TOMAHAWK', price: 109.89},
        {id: uuid(), name: 'Asus ROG STRIX B450-F GAMING', price: 119.99},
    ]
}

const reducer = (state = initialState, action) => {
    return state;
}

export default reducer;