// src/api/productService.js
import axios from 'axios';

const API_BASE_URL = 'https://millboard-vite-backend.onrender.com/api/v1/product';

// Function to create a product
export const createProduct = async (formData) => {
    try {
      const response = await axios.post(API_BASE_URL, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error.response ? error.response.data : new Error('Network Error');
    }
  };
