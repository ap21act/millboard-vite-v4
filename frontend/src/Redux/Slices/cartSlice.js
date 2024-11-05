import { createSlice } from '@reduxjs/toolkit';

// Helper functions to manage local storage
const saveCartToLocalStorage = (cartItems) => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
};

const loadCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : [];
};

const initialState = {
  items: loadCartFromLocalStorage(), // Load from local storage on initial state
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
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }

      saveCartToLocalStorage(state.items); // Save to local storage
    },
    replaceItem: (state, action) => {
      const item = action.payload;
      const existingItemIndex = state.items.findIndex(
        (cartItem) => cartItem.productId === item.productId && cartItem.sku === item.sku
      );

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex] = item;
      } else {
        state.items.push(item);
      }

      saveCartToLocalStorage(state.items); // Save to local storage
    },
    removeFromCart: (state, action) => {
      const { productId, sku } = action.payload;
      state.items = state.items.filter(
        (item) => item.productId !== productId || item.sku !== sku
      );

      saveCartToLocalStorage(state.items); // Save to local storage
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state.items); // Save empty cart to local storage
    },
  },
});

export const { addToCart, replaceItem, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
