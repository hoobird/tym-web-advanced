import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Book from './models/Book.js';

// Activate dotenv to read our .env file secrets
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.static('public')); // Runs frontend tester 
app.use(express.json()); // Middleware to parse JSON bodies in requests

// the project array to store books
let myLibrary = [
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "Atomic Habits", author: "James Clear" }
];

// READ: Get all books from the database
app.get('/api/books', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

// CREATE: Save a new book to the database
app.post('/api/books', async (req, res) => {
    const newBook = await Book.create(req.body);
    res.status(201).json({ message: "Book successfully saved!", book: newBook });
});

mongoose.connect(process.env.ATLAS_URI)
    .then(() => console.log('Successfully connected to MongoDB Atlas!'))
    .catch((error) => console.log('Database connection failed:', error));

app.listen(PORT, () => {
    console.log(`Open your browser to: http://localhost:${PORT}`);
    console.log('Press Ctrl + C to stop the server');
});
