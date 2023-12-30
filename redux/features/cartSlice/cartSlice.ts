// features/cart/cartSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const initialState: CartItem[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const index = state.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
