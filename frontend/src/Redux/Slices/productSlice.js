import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch all products from the backend
export const fetchAllProducts = createAsyncThunk(
  'product/fetchAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:7890/api/v1/product/getAllProducts');
      // console.log("API Response: ", response.data); 
      return response.data.data; // Assuming the response has a 'data' field containing the products
    } catch (error) {
      console.error("API Error: ", error); // Log any API error
      return rejectWithValue(error.response ? error.response.data : 'Error fetching products');
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    allProducts: [],   // To store all fetched products
    status: 'idle',    // Loading status
    error: null,       // To store any errors during fetch
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = 'loading';  // Set status to 'loading' when fetching
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // console.log("Fetched Products: ", action.payload); //
        state.allProducts = action.payload || []; // Ensure to set products or an empty array if payload is undefined
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = 'failed';   // Set status to 'failed' on error
        state.error = action.payload || 'Failed to load products'; // Log the error message
        console.error("Fetch Products Failed: ", state.error); // Log the error in the console
      });
  },
});

export default productSlice.reducer;
