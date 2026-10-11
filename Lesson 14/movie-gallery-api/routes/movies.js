import express from 'express';
import Movie from '../models/Movie.js';
import checkAdminKey from '../middleware/checkAdminKey.js';


const router = express.Router();

// READ ALL movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong on the server" });
    }
});

// READ ONE movie
router.get('/:id', async (req, res) => {
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
router.post('/', checkAdminKey, async (req, res) => {
    try {
        const newMovie = await Movie.create(req.body);
        res.status(201).json({ message: "Movie successfully saved!", movie: newMovie });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// UPDATE a movie
router.put('/:id', checkAdminKey, async (req, res) => {
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
router.delete('/:id', checkAdminKey, async (req, res) => {
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

export default router;