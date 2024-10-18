/* eslint-disable */

// Import the Express module and the fs module
const express = require('express');
const fs = require('fs');

// Initialize an Express application instance
const app = express();

// Function to count students from a CSV file asynchronously
function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      if (err) {
        // Reject the promise with an error if the file cannot be read
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the file content into lines and filter out any empty lines
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      // Exclude the header line from the list of students
      const students = lines.slice(1);

      // Object to store the count and list of students by their field of study
      const fields = {};
      students.forEach((student) => {
        // Split each student record by commas to extract details
        const [firstname, lastname, age, field] = student.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      // Prepare the output string with the total number of students
      let output = `Number of students: ${students.length}\n`;
      // Append the count and list of students for each field of study
      for (const field in fields) {
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      }
      // Resolve the promise with the final output string
      resolve(output.trim());
    });
  });
}

// Define a route handler for the root ("/") endpoint
app.get('/', (request, response) => {
  // Send a plain text response with "Hello Holberton School!"
  response.set('Content-Type', 'text/plain');
  response.send('Hello Holberton School!');
});

// Define a route handler for the "/students" endpoint
app.get('/students', (request, response) => {
  response.set('Content-Type', 'text/plain');
  // Read the student data asynchronously
  countStudents(process.argv[2].toString())
    .then((output) => {
      // Respond with the list of students
      response.send(`This is the list of our students\n${output}`);
    })
    .catch((error) => {
      // Respond with an error message if the database cannot be loaded
      // response.send(error.message);
      response.send('This is the list of our students\nCannot load the database');
    });
});

// Configure the app listen on port 1245
app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

// Export the app for use in other modules
module.exports = app;