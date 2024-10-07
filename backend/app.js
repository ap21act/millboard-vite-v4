import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import productRoutes from './Roots/product.root.js';

dotenv.config();

const app = express();

// Set up CORS to allow requests from specific origins
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Replace with your frontend URL
    credentials: true // Allow cookies from your origin
}));

// Middleware to parse incoming request bodies and serve static files
app.use(express.json({ limit: "16mb" })); // Consider reducing from "16gb" for security
app.use(express.urlencoded({ extended: true, limit: "16mb" })); // Consider reducing from "16gb"
app.use(express.static("public")); // Serves static files from the "public" folder
app.use(cookieParser()); // Parses cookies attached to client requests

// Use the routes for products
app.use('/api/v1', productRoutes); 

export default app;
