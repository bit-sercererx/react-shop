import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import productsSlice from './productsSlice';
import categoriesSlice from './categoriesSlice';
import cartSlice from './cartSlice';
export const store = configureStore({
    reducer: {
        users: userSlice,
        products: productsSlice,
        categories: categoriesSlice,
        cart: cartSlice,
    },
});
