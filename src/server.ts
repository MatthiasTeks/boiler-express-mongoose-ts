import express, { Request, Response, NextFunction } from 'express';
import userRoutes from './routes/userRoutes';
import reviewRoutes from './routes/reviewRoutes';
import serviceRoutes from './routes/serviceRoutes';
import bookingRoutes from './routes/bookingRoutes';
import paymentRoutes from './routes/paymentRoutes';
import messageRoutes from './routes/messageRoutes';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

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

app.use('/api/users', userRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/payment', paymentRoutes);
app.use('/api/messages', messageRoutes);

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