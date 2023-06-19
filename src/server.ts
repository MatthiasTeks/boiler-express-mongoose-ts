import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;

const initializeConfig = async () => {
    try {
      await mongoose.connect(`mongodb://${dbHost}:${dbPort}/${dbName}`);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.log('MongoDB connection error:', error);
    }
  };

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({
        message: err.message || 'An unknown error occurred!',
});
});

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        message: 'Route not found',
    });
});

initializeConfig().then(() => {
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
});