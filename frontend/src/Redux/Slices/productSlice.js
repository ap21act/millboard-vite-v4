// Redux Slice for Product (productSlice.js)
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch products by slug (async action)
export const fetchProductsBySlug = createAsyncThunk(
  'product/fetchProductsBySlug',
  async (slug, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:7890/api/v1/product/getProductsBySlug/${slug}`);
      return response.data.data; // Assuming the response structure has 'data'
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Fetch products by type (async action)
export const fetchProductsByType = createAsyncThunk(
  'product/fetchProductsByType',
  async (type, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:7890/api/v1/product/getProductsByType/${type}`);
      return response.data.products; // Assuming the response returns an array of products
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState: {
    items: [],              // For products fetched by slug
    productsByType: [],     // For products fetched by type
    status: 'idle',         // Status for slug
    typeStatus: 'idle',     // Status for type
    error: null,            // Error for slug
    typeError: null,        // Error for type
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle fetching by slug
    builder
      .addCase(fetchProductsBySlug.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsBySlug.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProductsBySlug.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'Failed to load product by slug';
      });

    // Handle fetching by type (new part)
    builder
      .addCase(fetchProductsByType.pending, (state) => {
        state.typeStatus = 'loading';
      })
      .addCase(fetchProductsByType.fulfilled, (state, action) => {
        state.typeStatus = 'succeeded';
        state.productsByType = action.payload; // Store products by type
      })
      .addCase(fetchProductsByType.rejected, (state, action) => {
        state.typeStatus = 'failed';
        state.typeError = action.payload?.message || 'Failed to load products by type';
      });
  },
});

export default productSlice.reducer;
