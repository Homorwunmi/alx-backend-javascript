/* eslint-disable */

import { Router } from 'express'; // Import express router
import AppController from '../controllers/AppController'; // Import AppController class
import StudentsController from '../controllers/StudentsController'; // Import StudentsController class

const routes = Router(); // Initialize a new router instance

// Route for the homepage, handled by AppController
routes.get('/', AppController.getHomepage);

// Route for listing all students, handled by StudentsController
routes.get('/students', StudentsController.getAllStudents);

// Route for listing students by major, handled by StudentsController
routes.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default routes; // Export the router instance