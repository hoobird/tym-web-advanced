import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.static('public')); // Runs frontend tester 
app.use(express.json()); // Middleware to parse JSON bodies in requests


// ==========================================================
// STUDENT WORKSPACE: Add your Books Array and API Routes Below!
// ==========================================================

// TODO: Write the project array to store books
let myLibrary = [
    { title: "The Hobbit", author: "J.R.R. Tolkien" },
    { title: "Atomic Habits", author: "James Clear" }
];

// TODO: Write a GET route ('/api/books') to send the library array
app.get('/api/books', (req, res) => {
    res.json(myLibrary);
});

// TODO: Write a POST route ('/api/books') to add a new book
app.post('/api/books', (req, res) => {
    const newBook = req.body; // Extract user payload
    myLibrary.push(newBook);  // Append to library arrays
    res.json({ message: "Book successfully archived!", updatedLibrary: myLibrary });
});

// ------ Solo Challenge: Editing & Destroying Data (PUT & DELETE) ------

// TODO 3: Write a PUT route ('/api/books/update-recent') to update the title of the LATEST book in the array.
app.put('/api/books/update-recent', (req, res) => {
    // 1. Safety check: Is the library empty?
    if (myLibrary.length === 0) {
        return res.json({ message: "The library is already empty!" });
    }

    // 2. Find the index of the very last item
    const lastIndex = myLibrary.length - 1;

    // 3. Update the data (assuming the user sent a new 'title' in the body)
    myLibrary[lastIndex].title = req.body.title; 

    // 4. Send the success response
    res.json({ 
        message: "Most recent book successfully updated!", 
        updatedLibrary: myLibrary 
    });
});

// TODO 4: Write a DELETE route ('/api/books/delete-oldest') to remove the OLDEST book from the array
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
        removedBook: discardedBook,
        updatedLibrary: myLibrary 
    });
});

// ==========================================================

app.listen(PORT, () => {
    console.log(`Open your browser to: http://localhost:${PORT}`);
});
