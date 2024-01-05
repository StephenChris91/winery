// app/store.ts

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/app/features/cart/cartSlice';
import { useSelector, TypedUseSelectorHook } from 'react-redux'



export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const store = configureStore({
  reducer: {
    // our reducers goes here
    cart: cartReducer
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;