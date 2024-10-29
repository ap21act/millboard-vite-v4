import dotenv from 'dotenv';
import app from '../app.js';
import connectDB from '../Database/index.js';

dotenv.config();

let isConnected = false; // Global variable to track database connection

export default async function handler(req, res) {
    try {
        // Only connect to the database once for serverless efficiency
        if (!isConnected) {
            await connectDB();
            isConnected = true; // Set connection flag to true after initial connection
        }
        
        // Now handle requests with Express app
        app(req, res);
    } catch (error) {
        res.status(500).json({ message: "Server failed to start", error });
    }
}
