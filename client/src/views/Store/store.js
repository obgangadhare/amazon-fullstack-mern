import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Store/cartslice';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
