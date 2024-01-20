// productSlice.ts

import { RootState } from '@/redux/rootReducer';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define your API endpoint
const API_ENDPOINT = 'http://localhost:3030/products';

// Define your initial state
interface ProductState {
  products: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  category: 'Red Wine' | 'White Wine' | "Sparkling Wine" | 'Fort Wine' | string
}

const initialState: ProductState = {
  products: [],
  status: 'idle',
  error: null,
  category: ''
};

// Define your product type
export type Product = {
  id: string;
  name: string;
  price: number;
  quantity?: number;
  imageUrl?: string;
  category?: string;
};

//fetch products by categories
const fetchByCategory = createAsyncThunk(
  'products/fetchByCategory', 
  async (category: string) => {

})

// Define your async thunk for fetching all products
const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async () => {
  const response = await fetch(API_ENDPOINT);
  const data = await response.json();
  return data;
});

// Define your async thunk for fetching a product by ID
const fetchProductById = createAsyncThunk(
  'products/fetchProductById', 
  async (productId: string) => {
  const response = await fetch(`${API_ENDPOINT}/${productId}`);
  const data = await response.json();
  return data;
});

// const fetchLimitedProducts = createAsyncThunk(
//     'products/fetchLimitedProducts',
//     async (limit: number) => {
//       const response = await fetch(`${API_ENDPOINT}?&_limit=${limit}`);
//       const data = await response.json();
//       return data;
//     }
//   );

// Define your product slice
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle the fetchAllProducts fulfilled action
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.products = action.payload;
    });
    
    // Handle the fetchAllProducts pending and rejected actions
    builder.addCase(fetchAllProducts.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchAllProducts.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message ?? 'Something went wrong';
    });

    // Handle the fetchProductById fulfilled action
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      // Handle fetching a single product if needed
      // Update state accordingly
    });

    // Handle the fetchLimitedProducts fulfilled action
    // builder.addCase(fetchLimitedProducts.fulfilled, (state, action) => {
    //   state.status = 'succeeded';
    //   state.limitedProducts = action.payload;
    // });
    
    // // Handle the fetchLimitedProducts pending and rejected actions
    // builder.addCase(fetchLimitedProducts.pending, (state) => {
    //     state.status = 'loading';
    // });
    // builder.addCase(fetchLimitedProducts.rejected, (state, action) => {
    //     state.status = 'failed';
    //     state.error = action.error.message ?? 'Something went wrong';
    // });
    },
});

// Export your async thunks for usage in components
export { fetchAllProducts, fetchProductById };

// Export the reducer
export default productSlice.reducer;

// Export the product selector
export const productSelector = (state: RootState) => state.product.products;
// export const limitedProductsSelector = (state: RootState) => state.product.limitedProducts;

