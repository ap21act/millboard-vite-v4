import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Slices/cartSlice';
import productReducer from './Slices/productSlice';
import specificationReducer from './Slices/specificationSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    specification: specificationReducer,
  },
});

export default store;
