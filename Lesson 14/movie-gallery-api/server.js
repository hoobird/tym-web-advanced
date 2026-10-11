import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import movieRoutes from './routes/movies.js';
import cors from 'cors';

// Activate dotenv to read our .env file secrets
dotenv.config();

const app = express();
const PORT = 3001;

app.use(express.static('public')); // Runs frontend tester 
app.use(express.json()); // Middleware to parse JSON bodies in requests
app.use(cors()); // Allow other websites (like our React app) to use our API

// Middleware: log every request
app.use((req, res, next) => {
    const time = new Date().toLocaleTimeString();
    console.log(`[${time}] ${req.method} ${req.url}`);
    next();
});

app.use('/api/movies', movieRoutes);

mongoose.connect(process.env.ATLAS_URI)
    .then(() => console.log('Successfully connected to MongoDB Atlas!'))
    .catch((error) => console.log('Database connection failed:', error));

app.listen(PORT, () => {
    console.log(`Open your browser to: http://localhost:${PORT}`);
    console.log('Press Ctrl + C to stop the server');
});
