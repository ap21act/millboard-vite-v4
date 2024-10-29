import dotenv from 'dotenv';
import app from '../app.js';
import connectDB from '../Database/index.js';

dotenv.config();

export default async (req, res) => {
    try {
        await connectDB(); // Connect to the database
        return app(req, res); // Use app as the serverless function handler
    } catch (error) {
        res.status(500).json({ message: "Server failed to start", error });
    }
};