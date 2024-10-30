import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch all products from the backend
export const fetchAllProducts = createAsyncThunk(
  'product/fetchAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://millboard-vite-backend.onrender.com/api/v1/product/getAllProducts');
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
    filteredProducts: [], // To store filtered products based on filter criteria
    filters: {},       // To store the current filter state
    filterOptions: {   // To store all possible options for filtering
      categories: [],
      subCategories: [],
      types: [],
      colours: [],
    },
    status: 'idle',    // Loading status
    error: null,       // To store any errors during fetch
  },
  reducers: {
    setFilter: (state, action) => {
      const { filterKey, filterValue } = action.payload;
      state.filters[filterKey] = filterValue;

      // Apply filters to products
      state.filteredProducts = state.allProducts.filter((product) => {
        return Object.entries(state.filters).every(([key, value]) => {
          if (!value) return true;
          return product[key] && product[key].toLowerCase().includes(value.toLowerCase());
        });
      });
    },
    clearFilters: (state) => {
      state.filters = {}; // Clear all filters
      state.filteredProducts = state.allProducts; // Reset to all products
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = 'loading';  // Set status to 'loading' when fetching
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allProducts = action.payload || []; // Set products or an empty array if payload is undefined
        state.filteredProducts = state.allProducts; // Initialize filteredProducts with all products

        // Extract unique filter options from all products
        const categories = new Set();
        const subCategories = new Set();
        const types = new Set();
        const colours = new Set();

        state.allProducts.forEach((product) => {
          if (product.category) categories.add(product.category);
          if (product.subCategory) subCategories.add(product.subCategory);
          if (product.type) types.add(product.type);
          if (product.colour) colours.add(product.colour);
        });

        state.filterOptions.categories = Array.from(categories);
        state.filterOptions.subCategories = Array.from(subCategories);
        state.filterOptions.types = Array.from(types);
        state.filterOptions.colours = Array.from(colours);
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = 'failed';   // Set status to 'failed' on error
        state.error = action.payload || 'Failed to load products'; // Log the error message
        console.error("Fetch Products Failed: ", state.error); // Log the error in the console
      });
  },
});

export const { setFilter, clearFilters } = productSlice.actions;
export default productSlice.reducer;
