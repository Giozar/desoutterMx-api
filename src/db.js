import mongoose from 'mongoose';
import { db } from './config/config.js';

export const connectDB = async () => {
    try {
        await mongoose.connect(db.host+db.database);
        console.log('DB is connected');
    } catch (error) {
        console.log(error);
    }
}