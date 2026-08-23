import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

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

// GET route ('/api/books') to send the library array
app.get('/api/books', (req, res) => {
    res.json(myLibrary);
});

// POST route ('/api/books') to add a new book
app.post('/api/books', (req, res) => {
    const newBook = req.body; // Extract user payload
    myLibrary.push(newBook);  // Append to library arrays
    res.json({ message: "Book successfully archived!", updatedLibrary: myLibrary });
});

// PUT route ('/api/books/update-recent') to update the title of the LATEST book in the array.
app.put('/api/books/update-recent', (req, res) => {
    // 1. Safety check: Is the library empty?
    if (myLibrary.length === 0) {
        return res.json({ message: "The library is already empty!" });
    }

    // 2. Find the index of the very last item
    const lastIndex = myLibrary.length - 1;

    // 3. Update the data 
    myLibrary[lastIndex].title = req.body.title;

    // 4. Send the success response
    res.json({
        message: "Most recent book successfully updated!",
        updatedLibrary: myLibrary
    });
});

// DELETE route ('/api/books/delete-oldest') to remove the OLDEST book from the array
app.delete('/api/books/delete-oldest', (req, res) => {
    // 1. Safety check: Is the library empty?
    if (myLibrary.length === 0) {
        return res.json({ message: "The library is already empty!" });
    }

    // 2. Remove the very first item using the JavaScript .shift() method
    const discardedBook = myLibrary.shift();

    // 3. Send the success response
    res.json({
        message: "Oldest book successfully removed!",
        updatedLibrary: myLibrary
    });
});

mongoose.connect(process.env.ATLAS_URI)
    .then(() => console.log('Successfully connected to MongoDB Atlas!'))
    .catch((error) => console.log('Database connection failed:', error));

app.listen(PORT, () => {
    console.log(`Open your browser to: http://localhost:${PORT}`);
    console.log('Press Ctrl + C to stop the server');
});
