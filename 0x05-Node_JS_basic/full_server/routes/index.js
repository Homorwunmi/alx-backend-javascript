/* eslint-disable */

import express from 'express'; // Import express router
import AppController from '../controllers/AppController'; // Import AppController class
import StudentsController from '../controllers/StudentsController'; // Import StudentsController class

function controllerRouting(app) {
    const router = express.Router(); // Initialize a new router instance
    app.use('/', router);
  
    // Route for the homepage, handled by AppController
    router.get('/', (req, res) => {
      AppController.getHomepage(req, res);
    });
  
    // Route for listing all students, handled by StudentsController
    router.get('/students', (req, res) => {
      StudentsController.getAllStudents(req, res, process.argv[2]);
    });
  
    // Route for listing students by major, handled by StudentsController
    router.get('/students/:major', (req, res) => {
      StudentsController.getAllStudentsByMajor(req, res, process.argv[2]);
    });
  }
  
  export default controllerRouting;