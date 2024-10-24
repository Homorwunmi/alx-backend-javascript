/* eslint-disable */

// Import the readDatabase function from the utils module
import readDatabase from '../utils';

// Define StudentsController class
class StudentsController {
  static getAllStudents(request, response, DATABASE) {
    // Call readDatabase with the database file path
    readDatabase(DATABASE)
      .then((fields) => {
        const students = [];
        // let count = 0;
        let msg;

        // for (const key of Object.keys(fields)) {
        //   count += fields[key].length;
        // }

        // students.push(`Number of students: ${count}`);
        students.push('This is the list of our students');

        for (const key of Object.keys(fields)) {
          msg = `Number of students in ${key}: ${
            fields[key].length
          }. List: ${fields[key].join(', ')}`;

          students.push(msg);
        }
        // Send the response with a 200 status code
        response.send(200, `${students.join('\n')}`);
      })
      .catch(() => {
        // Send a 500 status code with an error message if there's an issue loading the database
        response.send(500, 'Cannot load the database');
      });
  }

  // Static method to handle the /students/:major route
  static getAllStudentsByMajor(request, response, DATABASE) {
    const { major } = request.params; // Get the major from URL parameters

    // Check if the major is either CS or SWE
    if (major !== 'CS' && major !== 'SWE') {
      // Send a 500 status code with an error message if the major is invalid
      response.send(500, 'Major parameter must be CS or SWE');
    } else {
      // Call readDatabase with the database file path
      readDatabase(DATABASE)
        .then((fields) => {
          const students = fields[major];

          // Send the response with a 200 status and the list of students
          response.send(200, `List: ${students.join(', ')}`);
        })
        // Send a 500 status code with an error message if there's an issue loading the database
        .catch(() => response.send(500, 'Cannot load the database'));
    }
  }
}

export default StudentsController;