import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (cartItem) => cartItem.productId === item.productId && cartItem.sku === item.sku
      );

      if (existingItem) {
        // If the item with the same productId and SKU exists, update the quantity or replace
        existingItem.quantity += item.quantity;
      } else {
        // Otherwise, add the item to the cart
        state.items.push(item);
      }
    },
    replaceItem: (state, action) => {
      const item = action.payload;
      const existingItemIndex = state.items.findIndex(
        (cartItem) => cartItem.productId === item.productId && cartItem.sku === item.sku
      );

      if (existingItemIndex !== -1) {
        // If the item with the same productId and SKU exists, replace it
        state.items[existingItemIndex] = item;
      } else {
        // Otherwise, add the item to the cart
        state.items.push(item);
      }
    },
    removeFromCart: (state, action) => {
      const { productId, sku } = action.payload;
      state.items = state.items.filter(
        (item) => item.productId !== productId || item.sku !== sku
      );
    },
    clearCart: (state) => {
      // Clear all items from the cart
      state.items = [];
    },
  },
});

export const { addToCart, replaceItem, removeFromCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
