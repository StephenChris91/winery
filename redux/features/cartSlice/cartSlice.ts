import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/redux/rootReducer';

export type Product = {
  id: string;
  name: string;
  price: number;
  quantity?: number;
  imageUrl?: string;
};

export interface CartState {
  products: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CartState = {
  products: [],
  status: 'idle',
  error: null,
};

// export const fetchProducts = createAsyncThunk('cart/fetchProducts', async () => {
//   try {
//     const response = await fetch('https://65a419bca54d8e805ed471bc.mockapi.io/api/v1/products');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw new Error('Error fetching products');
//   }
// });

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
    deleteFromCart: (state, action: PayloadAction<string>) => {
      state.products = state.products.filter(item => item.id !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const item = state.products.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchProducts.pending, state => {
  //       state.status = 'loading';
  //     })
  //     .addCase(fetchProducts.fulfilled, (state, action) => {
  //       state.status = 'succeeded';
  //       state.products = action.payload;
  //     })
  //     .addCase(fetchProducts.rejected, (state, action) => {
  //       state.status = 'failed';
  //       state.error = action.error.message ?? 'Error fetching products';
  //     });
  // },
});

export const { addToCart, deleteFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;

export const cartSelector = (state: RootState) => state.cart.products;  // Return the entire slice
export const cartStatusSelector = (state: RootState) => state.cart.status;
export const cartErrorSelector = (state: RootState) => state.cart.error;
