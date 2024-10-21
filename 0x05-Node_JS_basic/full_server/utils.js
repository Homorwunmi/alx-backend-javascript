/* eslint-disable */

// Import the fs module to handle file operations
import fs from 'fs';

// Define and export the readDatabase function
const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    // Read the file content asynchronously
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        // Reject the promise if there's an error reading the file
        reject(new Error('Cannot load the database'));
      } else {
        // Split the file content into lines and process each line
        const lines = data.trim().split('\n');
        const studentsByField = {};

        // Iterate over each line after the header line
        for (let i = 1; i < lines.length; i++) {
          const [firstname, lastname, age, field] = lines[i].split(',');

          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          // Add the student's first name to the corresponding field's list
          studentsByField[field].push(firstname);
        }
        // Resolve the promise with the resulting object
        resolve(studentsByField);
      }
    });
  });
};

export default readDatabase;