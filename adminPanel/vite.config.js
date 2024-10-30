import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy API requests to the backend server
      '/api': {
        target: 'https://millboard-vite-backend.onrender.com',
        changeOrigin: true,
        secure: false,
        
      },
    },
  },
});



