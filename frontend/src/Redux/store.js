import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slices/cartSlice';
import productReducer from './Slices/productSlice';
import specificationReducer from './Slices/specificationSlice';
import darkModeReducer from './Slices/darkModeSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    specification: specificationReducer,
    darkMode: darkModeReducer,
  },
});

export default store;
