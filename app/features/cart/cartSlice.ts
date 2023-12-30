// features/cart/cartSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';

interface CartItem {
  id: string;
  quantity: number;
  // ... other properties
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartItem[],
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      // Logic to add item to cart
    },
    removeItem: (state, action: PayloadAction<string>) => {
      // Logic to remove item from cart
    },
    updateItem: (state, action: PayloadAction<CartItem>) => {
      // Logic to update item in cart
    },
  },
});

export const { addItem, removeItem, updateItem } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
