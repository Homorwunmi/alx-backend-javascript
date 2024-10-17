/* eslint-disable */

// Import the file system module to handle file operations
const fs = require('fs');

// Function to calculate the number of students from a CSV file asynchronously
function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    // Read the file content asynchronously
    fs.readFile(filepath, 'utf-8', (error, data) => {
      if (error) {
        // If an error occurs (e.g., file not found), reject the promise with a custom error message
        reject(new Error('Cannot load the database'));
        return;
      }

      // Split the file content into individual lines
      const lines = data.split('\n');

      // Filter out empty lines from the CSV content
      const validLines = lines.filter((line) => line.trim() !== '');

      // Remove the first line (header) from the valid lines
      const students = validLines.slice(1);

      // Log the total number of students found
      console.log(`Number of students: ${students.length}`);

      // Object to store the count and list of students by their field
      const fields = {};

      students.forEach((student) => {
        // Split each line by commas to get student data
        const [firstname, lastname, age, field] = student.split(',');

        // Initialize the field in the object if not present
        if (!fields[field]) {
          fields[field] = [];
        }

        // Add the student's first name to the respective field
        fields[field].push(firstname);
      });

      // Log the number of students and their names in each field
      for (const field in fields) {
        const studentList = fields[field];
        console.log(`Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}`);
      }

      // Resolve the promise once the processing is complete
      resolve();
    });
  });
}

module.exports = countStudents;