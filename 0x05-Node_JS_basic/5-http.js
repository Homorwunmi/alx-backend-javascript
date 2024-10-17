/* eslint-disable */

// Import the http and fs modules for server and file operations
const http = require('http');
const fs = require('fs');

// Function to count students from the CSV file
function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1); // Skip the header line

      const fields = {};
      students.forEach((student) => {
        const [firstname, lastname, age, field] = student.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      let output = `Number of students: ${students.length}\n`;
      for (const field in fields) {
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }
      resolve(output.trim());
    });
  });
}

// Create an HTTP server
const app = http.createServer((request, response) => {
  // response.statusCode = 200;
  if (request.url === '/') {
    // Handle the root URL path
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    // Handle requests to the "/students" URL path
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('This is the list of our students\n');
    // Get the student data asynchronously
    countStudents(process.argv[2].toString())
    .then((output) => {
      // response.end(`${output}`);
      response.end(output);
    }).catch((error) => {
      response.statusCode = 404;
      response.end('Cannot load the database');
    });
  }
});

// Configure the server to listen on port 1245
app.listen(1245);

// Export the server instance for use in other modules
module.exports = app;