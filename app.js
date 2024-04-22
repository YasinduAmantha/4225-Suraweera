// Import required modules
const express = require('express');

// Create an Express application
const app = express();
const port = 3000; // Port to listen on

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello, World! This is my Node.js app.');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
