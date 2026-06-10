import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.static('public')); // Runs frontend tester 
app.use(express.json()); // Middleware to parse JSON bodies in requests


// ==========================================================
// STUDENT WORKSPACE: Add your Books Array and API Routes Below!
// ==========================================================

// TODO: Write the project array to store books


// TODO: Write a GET route ('/api/books') to send the library array


// TODO: Write a POST route ('/api/books') to add a new book


// ------ Solo Challenge: Editing & Destroying Data (PUT & DELETE) ------

// TODO 3: Write a PUT route ('/api/books/update-recent') to update the title of the LATEST book in the array.


// TODO 4: Write a DELETE route ('/api/books/delete-oldest') to remove the OLDEST book from the array


// ==========================================================

app.listen(PORT, () => {
    console.log(`Open your browser to: http://localhost:${PORT}`);
    console.log('Press Ctrl + C to stop the server');
});
