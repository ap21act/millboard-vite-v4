import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import productRoutes from './Routes/product.route.js';

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN, // Make sure this value matches the frontend origin
    credentials: true
  }));
  
  app.use(express.json({ limit: '16gb' }));
  app.use(express.urlencoded({ extended: true, limit: '16gb' }));
  app.use(express.static('public'));
  app.use(cookieParser());
  
  // Use product routes
  app.use('/api/v1/product', productRoutes); // Include the product router

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  export default app;
