/*eslint-disable*/

// Import the Express module to create a web server
const express = require('express');

// Initialize an Express application instance
const app = express();

// Define a route handler for the root URL path ("/")
app.get('/', (request, response) => {
  // Send a plain text response with "Hello Holberton School!"
  response.send('Hello Holberton School!');
});

// Configure the app listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app for use in other modules
module.exports = app;