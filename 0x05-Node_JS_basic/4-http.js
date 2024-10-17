/*eslint-disable*/

// Import the http module
const http = require('http');

// Initialize the server and define its request-response logic
const app = http.createServer((request, response) => {
  // Set the HTTP response header with status code 200 and content-type as plain text
  response.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body with the desired message
  response.end('Hello Holberton School!');
});

// Configure the server to listen on port 1245
app.listen(1245);

// Export the app so it can be used elsewhere
module.exports = app;