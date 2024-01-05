// features/cart/cartSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/redux/store';
import {produce} from 'immer';  // <-- Import immer


export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string
}

const initialState: Array<CartItem> = [
  {
    id: '1',
    name: 'test product',
    price: 499,
    quantity: 10
  }
];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      produce(state, draftState => {
        const existingItem = draftState.find(item => item.id === action.payload.id);
        if (existingItem) {
          existingItem.quantity += action.payload.quantity;
        } else {
          draftState.push(action.payload);
        }
      });
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

export const cartSelector = (state: RootState) => state.cart;  //what does this line do?

export default cartSlice.reducer;
