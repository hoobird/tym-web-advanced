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

// Middleware: log every request
app.use((req, res, next) => {
    const time = new Date().toLocaleTimeString();
    console.log(`[${time}] ${req.method} ${req.url}`);
    next();
});

// the project array to store books
let myLibrary = [
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "Atomic Habits", author: "James Clear" }
];

// READ ALL
app.get('/api/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong on the server" });
    }
});

// READ ONE
app.get('/api/books/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: "Book not found!" });
        }
        res.json(book);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// CREATE: Save a new book to the database
app.post('/api/books', async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json({ message: "Book successfully saved!", book: newBook });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// UPDATE
app.put('/api/books/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found!" });
        }
        res.json({ message: "Book successfully updated!", book: updatedBook });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE
app.delete('/api/books/:id', async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found!" });
        }
        res.json({ message: "Book successfully deleted!", book: deletedBook });
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
