import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const CACHE_DURATION = 10800000; // 3 hours in milliseconds

// Thunk to fetch all products with only `boardImage`
export const fetchAllProducts = createAsyncThunk(
  'product/fetchAllProducts',
  async (_, { rejectWithValue }) => {
    const cachedData = JSON.parse(localStorage.getItem('allProducts'));
    const lastFetchTime = JSON.parse(localStorage.getItem('lastFetchTime'));

    // Check if cache exists and is still valid
    if (cachedData && Date.now() - lastFetchTime < CACHE_DURATION) {
      return cachedData;
    }

    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/product/getAllProducts`, {
        withCredentials: true,
      });
      const data = response.data.data;
      localStorage.setItem('allProducts', JSON.stringify(data)); // Cache the response
      localStorage.setItem('lastFetchTime', JSON.stringify(Date.now())); // Store fetch time
      return data;
    } catch (error) {
      console.error("API Error: ", error);
      return rejectWithValue(error.response ? error.response.data : 'Error fetching products');
    }
  }
);

// Thunk to fetch a single product by ID, including full details
export const fetchProductById = createAsyncThunk(
  'product/fetchProductById',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/product/getProductById/${productId}`);
      return response.data.data;
    } catch (error) {
      console.error("API Error: ", error);
      return rejectWithValue(error.response ? error.response.data : 'Error fetching product');
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
    selectedProduct: null, // To store full details of a single product
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
      // Handle fetchAllProducts
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
      })
      
      // Handle fetchProductById
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading';
        state.selectedProduct = null; // Clear previous selectedProduct on new load
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.selectedProduct = action.payload; // Set selected product with full details
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to load product details';
        console.error("Fetch Product By ID Failed: ", state.error); // Log the error in the console
      });
  },
});

export const { setFilter, clearFilters } = productSlice.actions;
export default productSlice.reducer;

