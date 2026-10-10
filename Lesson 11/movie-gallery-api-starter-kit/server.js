import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Movie from './models/Movie.js';

// Activate dotenv to read our .env file secrets
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.static('public')); // Runs frontend tester 
app.use(express.json()); // Middleware to parse JSON bodies in requests

// Middleware: log every request
app.use((req, res, next) => {
    const time = new Date().toLocaleTimeString();
    console.log(`[${time}] ${req.method} ${req.url}`);
    next();
});

// ~~~~~~~~~~~~~~~~~~~~~~~~~
// ~ Add Movie routes here ~
// ~~~~~~~~~~~~~~~~~~~~~~~~~

// READ ALL movies


// READ ONE movie


// CREATE a movie


// UPDATE a movie


// DELETE a movie



// ~~~~~~~~~~~~~~~~~~~~~~~~~
// ~ End of Movie routes ~
// ~~~~~~~~~~~~~~~~~~~~~~~~~


mongoose.connect(process.env.ATLAS_URI)
    .then(() => console.log('Successfully connected to MongoDB Atlas!'))
    .catch((error) => console.log('Database connection failed:', error));

app.listen(PORT, () => {
    console.log(`Open your browser to: http://localhost:${PORT}`);
    console.log('Press Ctrl + C to stop the server');
});
