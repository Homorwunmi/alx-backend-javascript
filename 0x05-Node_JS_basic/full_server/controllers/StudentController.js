/* eslint-disable */

// Import the readDatabase function from the utils module
import readDatabase from '../utils';

// Define and export the StudentsController class
export default class StudentsController {
  // Static method to handle the /students route
  static getAllStudents(request, response) {
    const databaseFile = process.argv[2]; // Get the database file path from command line args

    // Call readDatabase with the database file path
    readDatabase(databaseFile).then((studentsByField) => {
      let response = 'This is the list of our students\n';

      // Sort fields alphabetically and build the response
      Object.keys(studentsByField).sort().forEach((field) => {
        response += `Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}\n`;
      });

      // Send the response with a 200 status code
      response.status(200).send(response.trim());
    }).catch(() => {
      // Send a 500 status code with an error message if there's an issue loading the database
      response.status(500).send('Cannot load the database');
    });
  }

  // Static method to handle the /students/:major route
  static getAllStudentsByMajor(request, response) {
    const major = request.params.major; // Get the major from URL parameters
    const databaseFile = process.argv[2]; // Get the database file path from command line args

    // Check if the major is either CS or SWE
    if (major !== 'CS' && major !== 'SWE') {
      // Send a 500 status code with an error message if the major is invalid
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    // Call readDatabase with the database file path
    readDatabase(databaseFile).then((studentsByField) => {
      const students = studentsByField[major] || [];

      // Send the response with a 200 status and the list of students
      response.status(200).send(`List: ${students.join(', ')}`);
      
    }).catch(() => {
      // Send a 500 status code with an error message if there's an issue loading the database
      response.status(500).send('Cannot load the database');
    });
  }
}