import cartSlice from '@/redux/features/cartSlice/cartSlice';
import productSlice from './features/productSlice/productSlice';
import authSlice from '@/redux/features/authSlice/authSlice';
import { combineReducers } from '@reduxjs/toolkit'



const rootReducer = combineReducers({
  cart: cartSlice,
  // auth: authSlice
  product: productSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer