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

const productSlice = createSlice({
  name: 'product',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
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
        state.error = action.payload?.message || 'Failed to load products';
      });
  },
});

export default productSlice.reducer;
