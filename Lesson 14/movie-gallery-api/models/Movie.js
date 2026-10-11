import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    imdbId: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    year: { type: Number, required: true, min: [1888, 'Year must be 1888 or later'] },
    description: { type: String, required: true, trim: true },
    imagelink: { type: String, required: true, trim: true },
    score: {
        type: Number,
        required: true,
        min: [0, 'Score cannot be less than 0'],
        max: [5, 'Score cannot be more than 5']
    },
    trailerUrl: { type: String, required: true, trim: true }
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
