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

// READ ALL movies
app.get('/api/movies', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong on the server" });
    }
});

// READ ONE movie
app.get('/api/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found!" });
        }
        res.json(movie);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// CREATE a movie
app.post('/api/movies', async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(201).json({ message: "Movie successfully saved!", movie: newMovie });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// UPDATE a movie
app.put('/api/movies/:id', async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedMovie) {
            return res.status(404).json({ message: "Movie not found!" });
        }
        res.json({ message: "Movie successfully updated!", movie: updatedMovie });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE a movie
app.delete('/api/movies/:id', async (req, res) => {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        if (!deletedMovie) {
            return res.status(404).json({ message: "Movie not found!" });
        }
        res.json({ message: "Movie successfully deleted!", movie: deletedMovie });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

mongoose.connect(process.env.ATLAS_URI)
    .then(() => console.log('Successfully connected to MongoDB Atlas!'))
    .catch((error) => console.log('Database connection failed:', error));

app.listen(PORT, () => {
    console.log(`Open your browser to: http://localhost:${PORT}`);
    console.log('Press Ctrl + C to stop the server');
});
