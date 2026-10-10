import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    imdbId: { type: String, required: true },
    title: { type: String, required: true },
    year: { type: Number, required: true },
    description: { type: String, required: true },
    imagelink: { type: String, required: true },
    score: { type: Number, required: true },
    trailerUrl: { type: String, required: true }
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
